import "./complaints.css";
import { Link } from "react-router-dom";
const Complaints = () => {
  return (
    <div className="complaints-wrapper">
      <div className="complaints-card">
        <div>
          <h2 className="complaint-title">Make Complaint</h2>
          <p className="complaints-text">
            Report an Issue or conflict with schedule
          </p>

          <div className="report-issue">
            <Link to="/dashboard/student/complain">
              <button>Report Issue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
