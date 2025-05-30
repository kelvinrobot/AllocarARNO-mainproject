import { useState } from "react";
import axios from "../../../../lib/axios";

const StudentGroupForm = () => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !shortName) return alert("All fields are required");

    try {
      const res = await axios.post("/v1/student-groups", { name, shortName });
      const { failed, message } = await res.data;
      if (failed) {
        alert(message || "Error adding student group");
        return;
      }

      alert(message || "Student group added successfully");
      setName("");
      setShortName("");
    } catch (err) {
      alert(err.response.data.message || "Error adding student group");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Group Short Name"
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
        required
      />
      <button type="submit" className="upload-button">
        Add Student Group
      </button>
    </form>
  );
};

export default StudentGroupForm;
