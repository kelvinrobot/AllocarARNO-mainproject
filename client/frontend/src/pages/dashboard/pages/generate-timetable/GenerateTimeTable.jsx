import React, { useState } from 'react'
import "./generate-timetable.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { FiChevronDown, FiPlus } from 'react-icons/fi';

const GenerateTimeTable = () => {
    const [rows, setRows] = useState([
        { id: 1, courseCode: "", studentGroup: "", lecturer: "", activeHall: "", time: "" },
        { id: 2, courseCode: "", studentGroup: "", lecturer: "", activeHall: "", time: "" },
        { id: 3, courseCode: "", studentGroup: "", lecturer: "", activeHall: "", time: "" },
        { id: 4, courseCode: "", studentGroup: "", lecturer: "", activeHall: "", time: "" },
        { id: 5, courseCode: "", studentGroup: "", lecturer: "", activeHall: "", time: "" },
    ])
    const [studentGroups] = useState(["Group A", "Group B", "Group C", "Group D", "Group E"])
    const [activeHalls] = useState(["Hall 101", "Hall 102", "Hall 201", "Hall 202", "Auditorium A", "Auditorium B"])

    /* create a draft state */
    const [savedDraftTimetable, setSavedDraftTimetable] = useState([]);

    /* function to add new row */
    const addRow = () => {
        const newRow = {
            id: rows.length + 1,
            courseCode: "",
            studentGroup: "",
            lecturer: "",
            activeHall: "",
            time: "",
        }
        setRows([...rows, newRow])
    }

    /* handle input chhange */
    const handleInputChange = (id, field, value) => {
        const updatedRows = rows.map((row) => {
            if (row.id === id) {
                return { ...row, [field]: value }
            }
            return row
        })
        setRows(updatedRows)
    }

    /* handle submission */
    const handleGenerateTimeTableSubmission = (e) => {
        e.preventDefault();

        /* generated timetable has been saved to 'rows' */
        // console.log(rows)

    }

    /* handle draft */
    const saveToDraft = () => {
        setSavedDraftTimetable(rows)

        /* save to draft logic goes in here */
        // console.log(savedDraftTimetable) 

    }

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
                                <div className="header-cell">Course Code</div>
                                <div className="header-cell">Student Group</div>
                                <div className="header-cell">Lecturer</div>
                                <div className="header-cell">Active Hall</div>
                                <div className="header-cell">Time</div>
                            </div>



                            <div className="table-body">
                                {rows.map((row) => (
                                    <div className="table-row" key={row.id}>
                                        <div className="table-cell">
                                            <input
                                                type="text"
                                                value={row.courseCode}
                                                onChange={(e) => handleInputChange(row.id, "courseCode", e.target.value)}

                                            />
                                        </div>


                                        <div className="table-cell">
                                            <div className="select-container">
                                                <select
                                                    value={row.studentGroup}
                                                    onChange={(e) => handleInputChange(row.id, "studentGroup", e.target.value)}
                                                    className="dropdown-select"
                                                >
                                                    <option value="">Select Group</option>
                                                    {studentGroups.map((group) => (
                                                        <option key={group} value={group}>
                                                            {group}
                                                        </option>
                                                    ))}
                                                </select>
                                                <FiChevronDown className="dropdown-icon" />
                                            </div>
                                        </div>
                                        <div className="table-cell">
                                            <input
                                                type="text"
                                                value={row.lecturer}
                                                onChange={(e) => handleInputChange(row.id, "lecturer", e.target.value)}
                                            />
                                        </div>
                                        <div className="table-cell">
                                            <div className="select-container">
                                                <select
                                                    value={row.activeHall}
                                                    onChange={(e) => handleInputChange(row.id, "activeHall", e.target.value)}
                                                    className="dropdown-select"
                                                >
                                                    <option value="">Select Hall</option>
                                                    {activeHalls.map((hall) => (
                                                        <option key={hall} value={hall}>
                                                            {hall}
                                                        </option>
                                                    ))}
                                                </select>
                                                <FiChevronDown className="dropdown-icon" />
                                            </div>
                                        </div>
                                        <div className="table-cell">
                                            <input type="time" value={row.time} onChange={(e) => handleInputChange(row.id, "time", e.target.value)} />
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <button className="add-row-button" onClick={addRow}>
                                <FiPlus className="add-icon" /> Add Row
                            </button>

                        </div>
                        <div className="form-actions">
                            <button className="save-draft-button" onClick={saveToDraft}>Save Draft</button>
                            <button className="generate-button" type='submit'>
                                <FiPlus className="generate-icon" /> Generate Timetable
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default GenerateTimeTable