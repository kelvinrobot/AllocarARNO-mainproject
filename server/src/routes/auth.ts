import { Router } from "express";
import { signin, signout, signup } from "../controllers/auth";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);

export default router;
