const HallTable = ({ data }) => {
  if (!data.length) return <p className="no-entries">No halls added yet.</p>;

  return (
    <div className="entity-table-wrapper">
      <table className="entity-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SHORT NAME</th>
            <th>IS ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hall, idx) => (
            <tr key={idx}>
              <td>{hall.name}</td>
              <td>{hall.shortName}</td>
              <td>{hall.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HallTable;
