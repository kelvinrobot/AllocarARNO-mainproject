import { useState } from "react";
import axios from "../../../../lib/axios";
import "./HallForm.css";
import TimeSlot from "./TimeSlot";
import { BsInfoCircle, BsPlus } from "react-icons/bs";

const HallForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [timeSlots, setTimeSlots] = useState([
    { id: Date.now(), day: "Sunday", startTime: "", endTime: "" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !shortName) {
      return alert("Please fill in all the required fields correctly");
    }

    try {
      const res = await axios.post("/v1/halls", {
        name,
        shortName,
        isActive,
        timeSlots,
      });
      const { message, failed } = await res.data;

      if (failed) {
        alert(message || "Error adding hall.");
        return;
      }

      onAdd({ name, shortName, isActive });
      alert(message || "Hall added successfully");

      setName("");
      setShortName("");
    } catch (err) {
      alert(err.response.data.message || "Error adding hall");
    }
  };

  const handleSlotChange = (e, id) => {
    const { name, value } = e.target;
    setTimeSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === id ? { ...slot, [name]: value } : slot
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Hall Name"
        base-button
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Hall Short Name"
          value={shortName}
          onChange={(e) => setShortName(e.target.value)}
          required
        />
        <select onChange={(e) => setIsActive(e.target.value)}>
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>
      </div>

      <div className="time-slots-header">
        <h2 className="time-slots-title">Time Slots</h2>
        <p onClick={() => setShowInfo(!showInfo)} className="info-toggle">
          What's this?
        </p>
      </div>
      {showInfo && (
        <div className="time-slots-info">
          <BsInfoCircle />{" "}
          <p>
            Time ranges when the hall will be active for use, you can add as
            many as possible.
          </p>
        </div>
      )}
      <div className="time-slots">
        {timeSlots.map((slot, i) => (
          <TimeSlot key={i} slot={slot} handleSlotChange={handleSlotChange} />
        ))}
      </div>

      <div className="base-button">
        <button type="submit" className="upload-button">
          Add Hall
        </button>
        <button
          onClick={() =>
            setTimeSlots((prev) => [
              ...prev,
              { day: "Sunday", startTime: "", endTime: "" },
            ])
          }
          className="add-slot-button"
        >
          <BsPlus size={24} />
        </button>
      </div>
    </form>
  );
};

export default HallForm;
