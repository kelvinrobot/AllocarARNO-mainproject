const StudentGroupTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="no-entries">No student groups added yet.</p>;
  }

  return (
    <div className="entity-table-wrapper">
      <table className="entity-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SHORT NAME</th>
          </tr>
        </thead>
        <tbody>
          {data.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>{group.shortName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentGroupTable;
