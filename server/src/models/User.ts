import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../lib/cloudinary";

const PASSWORD_MIN_LENGTH = 8;
const JWT_EXPIRATION = "7d";
const SALT_ROUNDS = 10;
const AVATAR_STYLES = [
  "micah",
  "avataaars",
  "open-peeps",
  "big-smile",
  "adventurer",
];
const AVATAR_BACKGROUNDS = ["ffdfbf", "ffd5dc", "d1d4f9", "c0aede", "b6e3f4"];

export interface IUser extends Document {
  id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imageUrl: string;
  cloudinaryId: string | null;
  gender: "male" | "female";
  role?: "admin" | "group-rep" | "member";
  emailVerified?: boolean;
  lastSignInAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  // Methods
  comparePassword(candidatePassword: string): Promise<boolean>;
  getPublicProfile(
    requestingUserId?: string
  ): Promise<Partial<IUser> & { name?: string }>;
  generateAuthToken(): string;
  resetPassword(newPassword: string): Promise<void>;
}

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [
        PASSWORD_MIN_LENGTH,
        `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
      ],
      select: false,
    },
    imageUrl: {
      type: String,
    },
    cloudinaryId: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "group-rep", "member"],
      default: "member",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

/**
 * Generate a random avatar for new users
 */
userSchema.pre("save", function (next) {
  if (!this.isNew || this.imageUrl) return next();

  try {
    const randomStyle =
      AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)];
    const randomBackground =
      AVATAR_BACKGROUNDS[Math.floor(Math.random() * AVATAR_BACKGROUNDS.length)];
    const seed = this._id.toString();
    this.imageUrl = `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}&backgroundColor=${randomBackground}`;
  } catch (error) {
    console.error("Error generating avatar:", error);
    this.imageUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this._id.toString()}&backgroundColor=b6e3f4`;
  }
  next();
});

/**
 * Hash password before saving
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password.trim(), salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

/**
 * Handle profile picture uploads
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("pic")) return next();

  try {
    if (this.imageUrl?.startsWith("data:image")) {
      if (this.cloudinaryId) {
        try {
          await cloudinary.uploader.destroy(this.cloudinaryId);
        } catch (error) {
          console.error("Error deleting old profile image:", error);
        }
      }

      const publicId = `profiles/${this._id}_${Date.now()}`;

      const uploadResponse = await cloudinary.uploader.upload(this.imageUrl, {
        public_id: publicId,
        folder: "profiles",
        overwrite: true,
        resource_type: "image",
        transformation: [
          { width: 400, height: 400, crop: "limit" },
          { quality: "auto" },
        ],
      });

      this.imageUrl = uploadResponse.secure_url;
      this.cloudinaryId = uploadResponse.public_id;
    }
    next();
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    const randomStyle =
      AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)];
    this.imageUrl = `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${this._id.toString()}&backgroundColor=b6e3f4`;
    this.cloudinaryId = null;
    next();
  }
});

/**
 * Generate JWT auth token
 */
userSchema.methods.generateAuthToken = function (): string {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: JWT_EXPIRATION,
  });
};

/**
 * Compare provided password with stored hash
 */
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    const user = this.password
      ? this
      : await User.findById(this._id).select("+password");
    if (!user || !user.password) {
      throw new Error("Password not available for comparison");
    }
    return bcrypt.compare(candidatePassword, user.password);
  } catch (error) {
    console.error("Password comparison error:", error);
    return false;
  }
};

/**
 * Reset user password
 */
userSchema.methods.resetPassword = async function (
  newPassword: string
): Promise<void> {
  this.password = newPassword;
  await this.save();
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
