import { useEffect, useState } from "react";
import "./generate-timetable.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { FiChevronDown, FiPlus } from "react-icons/fi";
import axios from "../../../../lib/axios";

const GenerateTimeTable = () => {
  const [rows, setRows] = useState([
    { id: 1, course_code: "", student_group: "", lecturer: "" },
  ]);
  const [studentGroups, setStudentGroups] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [courses, setCourses] = useState([]);

  /* create a draft state */
  const [savedDraftTimetable, setSavedDraftTimetable] = useState([]);

  /* function to add new row */
  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      course_code: "",
      student_group: "",
      lecturer: "",
      activeHall: "",
      time: "",
    };
    setRows([...rows, newRow]);
  };

  /* Handle Input Change */
  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  /* handle submission */
  const handleGenerateTimeTableSubmission = (e) => {
    e.preventDefault();

    /* generated timetable has been saved to 'rows' */
    // console.log(rows)
  };

  /* handle draft */
  const saveToDraft = () => {
    setSavedDraftTimetable(rows);

    /* save to draft logic goes in here */
    // console.log(savedDraftTimetable)
  };

  useEffect(() => {
    async function getDatas() {
      // Courses
      const {
        failed: courses_failed,
        data: courses_data,
        message: courses_message,
      } = await axios.get("/v1/courses");
      if (courses_failed) {
        alert(courses_message || "Error fetching courses");
      }
      setCourses(courses_data.data);

      // Student Groups
      const {
        failed: student_groups_failed,
        data: student_groups_data,
        message: student_groups_message,
      } = await axios.get("/v1/student-groups");
      if (student_groups_failed) {
        alert(student_groups_message || "Error fetching courses");
      }
      setStudentGroups(student_groups_data.data);

      // Lecturers
      const {
        failed: lecturers_failed,
        data: lecturers_data,
        message: lecturers_message,
      } = await axios.get("/v1/lecturers");
      if (lecturers_failed) {
        alert(lecturers_message || "Error fetching courses");
      }
      setLecturers(lecturers_data.data);
    }

    getDatas();
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      {/* sidebar area */}
      <div className="dashboard-main">
        {/* include the sidebar */}
        <Sidebar currentPage="generate" />

        {/* main generate timetable area */}
        <div className="content-area">
          <form onSubmit={handleGenerateTimeTableSubmission}>
            <div className="timetable-form">
              <div className="table-header">
                <div className="header-cell">Course</div>
                <div className="header-cell">Student Group</div>
                <div className="header-cell">Lecturer</div>
              </div>

              <div className="table-body">
                {rows.map((row) => (
                  <div className="table-row" key={row.id}>
                    <div className="table-cell">
                      <div className="select-container">
                        <select
                          value={row.course_code}
                          onChange={(e) =>
                            handleInputChange(
                              row.id,
                              "course_code",
                              e.target.value
                            )
                          }
                          className="dropdown-select"
                        >
                          <option value="">Select Course</option>
                          {courses.map((course, i) => (
                            <option key={i} value={course.code}>
                              {course.name}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="dropdown-icon" />
                      </div>
                    </div>

                    <div className="table-cell">
                      <div className="select-container">
                        <select
                          value={row.student_group}
                          onChange={(e) =>
                            handleInputChange(
                              row.id,
                              "student_group",
                              e.target.value
                            )
                          }
                          className="dropdown-select"
                        >
                          <option value="">Select Group</option>
                          {studentGroups.map((group, i) => (
                            <option key={i} value={group._id}>
                              {group.name}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="dropdown-icon" />
                      </div>
                    </div>

                    <div className="table-cell">
                      <div className="select-container">
                        <select
                          value={row.lecturer}
                          onChange={(e) =>
                            handleInputChange(
                              row.id,
                              "lecturer",
                              e.target.value
                            )
                          }
                          className="dropdown-select"
                        >
                          <option value="">Select Lecturer</option>
                          {lecturers.map((lecturer, i) => (
                            <option key={i} value={lecturer._id}>
                              {lecturer.name}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown className="dropdown-icon" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="add-row-button" onClick={addRow}>
                <FiPlus className="add-icon" /> Add Row
              </button>
            </div>
            <div className="form-actions">
              <button className="save-draft-button" onClick={saveToDraft}>
                Save Draft
              </button>
              <button className="generate-button" type="submit">
                <FiPlus className="generate-icon" /> Generate Timetable
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateTimeTable;
