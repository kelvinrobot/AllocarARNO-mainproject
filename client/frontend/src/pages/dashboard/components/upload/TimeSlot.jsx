import "./TimeSlot.css";

const TimeSlot = ({ handleChange, slot, handleSlotChange }) => {
  return (
    <div className="time-slot">
      <div className="time-slot-input-group">
        <label htmlFor="day">Day</label>
        <select id="day" value={slot.day} name="day" onChange={handleChange}>
          <option value={"sunday"}>Sunday</option>
          <option value={"monday"}>Monday</option>
          <option value={"tuesday"}>Tuesday</option>
          <option value={"wednesday"}>Wednesday</option>
          <option value={"thursday"}>Thursday</option>
          <option value={"friday"}>Friday</option>
          <option value={"saturday"}>Saturday</option>
        </select>
      </div>

      <div className="time-slot-input-group">
        <label htmlFor="startTime">Start Time</label>
        <input
          id="startTime"
          value={slot.startTime}
          type="time"
          name="startTime"
          className="time-slot-input"
          onChange={handleSlotChange}
        />
      </div>

      <div className="time-slot-input-group">
        <label htmlFor="endTime">End Time</label>
        <input
          id="endTime"
          value={slot.endTime}
          type="time"
          name="endTime"
          className="time-slot-input"
          onChange={(e) => handleSlotChange(e, slot.id)}
        />
      </div>
    </div>
  );
};

export default TimeSlot;
