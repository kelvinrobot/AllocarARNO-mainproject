const CourseTable = ({ data }) => {
  if (!data.length) return <p className="no-entries">No courses added yet.</p>;

  return (
    <div className="entity-table-wrapper">
      <table className="entity-table">
        <thead>
          <tr>
            <th>CODE</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {data.map((course, idx) => (
            <tr key={idx}>
              <td>{course.code}</td>
              <td>{course.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
