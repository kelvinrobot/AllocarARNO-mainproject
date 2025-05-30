import { useState } from "react";
import axios from "../../../../lib/axios";

const LecturerForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [rank, setRank] = useState("lecturer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("Name is required");
    if (!email) return alert("Email is required");

    try {
      const res = await axios.post("/v1/lecturers", {
        name,
        gender,
        rank,
        email,
      });
      const { failed, message } = await res.data;
      if (failed) {
        alert(message || "Error adding lecturer");
        return;
      }

      alert(message || "Lecturer added successfully");
      setName("");
      setGender("male");
      setRank("lecturer");
      setEmail("");
      onAdd({ name, gender, rank, email });
    } catch (err) {
      alert(err.response.data.message || "Error adding lecturer");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Lecturer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Lecturer Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select value={rank} onChange={(e) => setRank(e.target.value)}>
        <option value="lecturer">Lecturer</option>
        <option value="doctor">Doctor</option>
        <option value="professor">Professor</option>
      </select>
      <button type="submit" className="upload-button">
        Add Lecturer
      </button>
    </form>
  );
};

export default LecturerForm;
