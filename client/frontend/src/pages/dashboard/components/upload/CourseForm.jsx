import { useState } from "react";
import "./CourseForm.css";
import { slugify } from "../../../../lib/helpers";
import axios from "../../../../lib/axios";

const CourseForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !code) return alert("All fields are required");

    try {
      const res = await axios.post("/v1/courses", { name: name.trim(), code });
      const { failed, message } = res.data;

      if (failed) {
        alert(message || "Error adding course.");
        return;
      }
      alert(message || "Course added successfully");

      setCode("");
      setName("");
      onAdd({ name: name.trim(), code, id: new Date().getTime() });
    } catch (err) {
      alert(err.response.data.message || "Error creating course");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Course Code"
        value={code}
        onChange={(e) => setCode(slugify(e.target.value))}
      />
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="upload-button">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
