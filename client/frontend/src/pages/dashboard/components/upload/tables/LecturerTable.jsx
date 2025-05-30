const LecturerTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="no-entries">No lecturers added yet.</p>;
  }

  return (
    <div className="entity-table-wrapper">
      <table className="entity-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>GENDER</th>
            <th>RANK</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lecturer, index) => (
            <tr key={index}>
              <td>{lecturer.name}</td>
              <td style={{ textTransform: "capitalize" }}>{lecturer.gender}</td>
              <td style={{ textTransform: "capitalize" }}>{lecturer.rank}</td>
              <td>{lecturer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LecturerTable;
