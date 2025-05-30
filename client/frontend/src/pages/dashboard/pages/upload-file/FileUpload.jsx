// "use client";

import { useState, useRef, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CourseForm from "../../components/upload/CourseForm";
import HallForm from "../../components/upload/HallForm";
import LecturerForm from "../../components/upload/LecturerForm";
import StudentGroupForm from "../../components/upload/StudentGroupForm";
import "./fileUpload.css";
import axios from "../../../../lib/axios";
import CourseTable from "../../components/upload/tables/CourseTable";
import HallTable from "../../components/upload/tables/HallTable";
import LecturerTable from "../../components/upload/tables/LecturerTable";
import StudentGroupTable from "../../components/upload/tables/StudentGroupTable";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [entityType, setEntityType] = useState("course");
  const [loadingData, setLoadingData] = useState({
    course: true,
    hall: true,
    lecturer: true,
    "student group": true,
  });
  const [dataMap, setDataMap] = useState({
    course: [],
    hall: [],
    lecturer: [],
    "student group": [],
  });
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.size <= 10 * 1024 * 1024) {
      setFile(droppedFile);
    } else {
      alert("File size exceeds 10MB limit");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size exceeds 10MB limit");
    }
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file");
    alert(`"${file.name}" uploaded for ${entityType}`);
  };

  const handleAddEntity = (newEntity) => {
    setDataMap((prev) => ({
      ...prev,
      [entityType]: [...prev[entityType], newEntity],
    }));
  };

  useEffect(() => {
    async function fetchEntityDatas() {
      // Courses
      const course_res = await axios.get("/v1/courses");
      const {
        failed: courses_failed,
        data: courses_data,
        message: courses_message,
      } = course_res.data;
      if (courses_failed) {
        alert(courses_message);
        return;
      }
      setDataMap((prev) => ({ ...prev, course: courses_data }));
      setLoadingData((prev) => ({ ...prev, course: false }));

      // // Halls
      const hall_res = await axios.get("/v1/halls");
      const {
        failed: halls_failed,
        data: halls_data,
        message: halls_message,
      } = hall_res.data;
      if (halls_failed) {
        alert(halls_message);
        return;
      }
      setDataMap((prev) => ({ ...prev, hall: halls_data }));
      setLoadingData((prev) => ({ ...prev, hall: false }));

      // Lecturers
      const lecturer_res = await axios.get("/v1/lecturers");
      const {
        failed: lecturers_failed,
        data: lecturers_data,
        message: lecturers_message,
      } = lecturer_res.data;
      if (lecturers_failed) {
        alert(lecturers_message);
        return;
      }
      setDataMap((prev) => ({ ...prev, lecturer: lecturers_data }));
      setLoadingData((prev) => ({ ...prev, lecturer: false }));

      // Student Groups
      const student_group_res = await axios.get("/v1/student-groups");
      const {
        failed: student_groups_failed,
        data: student_groups_data,
        message: student_groups_message,
      } = student_group_res.data;
      if (student_groups_failed) {
        alert(student_groups_message);
        return;
      }
      setDataMap((prev) => ({ ...prev, "student group": student_groups_data }));
      setLoadingData((prev) => ({ ...prev, "student group": false }));
    }

    fetchEntityDatas();
  }, []);

  const renderForm = () => {
    const commonProps = { onAdd: handleAddEntity };
    switch (entityType) {
      case "course":
        return <CourseForm {...commonProps} />;
      case "hall":
        return <HallForm {...commonProps} />;
      case "lecturer":
        return <LecturerForm {...commonProps} />;
      case "student group":
        return <StudentGroupForm {...commonProps} />;
      default:
        return null;
    }
  };

  const renderTable = () => {
    const data = dataMap[entityType];

    if (loadingData[entityType]) {
      return <p className="no-entries">Loading {entityType}s...</p>;
    }

    switch (entityType) {
      case "course":
        return <CourseTable data={data} />;
      case "hall":
        return <HallTable data={data} />;
      case "lecturer":
        return <LecturerTable data={data} />;
      case "student group":
        return <StudentGroupTable data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-main">
        <Sidebar currentPage="upload" />
        <div className="content-area">
          <div className="file-upload-wrapper">
            <div className="file-upload-container">
              <h1 className="upload-title">Upload or Add Entities</h1>
              <select
                className="entity-selector"
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
              >
                <option value="course">Courses</option>
                <option value="hall">Halls</option>
                <option value="lecturer">Lecturers</option>
                <option value="student group">Student Groups</option>
              </select>

              <p className="text-center upload-description">
                Upload an <span className="format">.XLSX</span>,{" "}
                <span className="format">.CSV</span>, or{" "}
                <span className="format">.DOCX</span> file (Max 10MB) or add
                manually below
              </p>

              <div
                className={`upload-area ${isDragging ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".xlsx,.csv,.docx"
                  style={{ display: "none" }}
                />

                <div className="upload-content">
                  <div className="upload-icon">
                    <FiUploadCloud size={40} />
                  </div>
                  <p className="upload-text">
                    {file
                      ? file.name
                      : "Drag and drop or click to choose files"}
                  </p>
                  <p className="file-size-info">
                    <span className="info-icon">
                      <AiOutlineExclamationCircle />
                    </span>{" "}
                    Max file size 10MB
                  </p>
                </div>
              </div>

              <button
                className="upload-button"
                onClick={handleUpload}
                disabled={!file}
              >
                Upload {entityType}
              </button>

              <div className="manual-entry-form">
                <h2 className="form-title">Add a {entityType} manually</h2>
                {renderForm()}
              </div>
            </div>

            <div className="entity-container">
              <h2 className="entity-header">{entityType}s</h2>
              {renderTable()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
