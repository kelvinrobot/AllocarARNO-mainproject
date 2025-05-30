import React, { useState } from 'react'
import "./timetable.css"

const TimeTablePanel = () => {
    const days = ["Mon", "Tue", "Wed", "Thur", "Fri"]
    const [activeDay, setActiveDay] = useState("Mon")

    // Class schedules for each day
    const classSchedules = {
        Mon: [
            {
                id: 1,
                code: "CSC 201",
                location: "MAIN HALL",
                time: "9:00 AM",
                colorClass: "class-purple",
            },
            {
                id: 2,
                code: "ENG 105",
                location: "2K HALL",
                time: "11:30 AM",
                colorClass: "class-blue",
            },
            {
                id: 3,
                code: "MTH 202",
                location: "1K CAP",
                time: "02:30 PM",
                colorClass: "class-yellow",
            },
        ],
        Tue: [
            {
                id: 1,
                code: "BIO 301",
                location: "LAB COMPLEX",
                time: "8:30 AM",
                colorClass: "class-green",
            },
            {
                id: 2,
                code: "CHM 201",
                location: "SCIENCE BLOCK",
                time: "12:00 PM",
                colorClass: "class-blue",
                hasSchedule: true,
            },
        ],
        Wed: [
            {
                id: 1,
                code: "PHY 201",
                location: "ADETORU HALL",
                time: "8:00 AM",
                colorClass: "class-purple",
            },
            {
                id: 2,
                code: "MTS 301",
                location: "1K CAP",
                time: "10:30 AM",
                colorClass: "class-blue",
            },
            {
                id: 3,
                code: "ARC 301",
                location: "OBAKEKERE",
                time: "01:00 PM",
                colorClass: "class-green",
                hasSchedule: true,
            },
            {
                id: 4,
                code: "PHY 101",
                location: "1K CAP",
                time: "02:00 PM",
                colorClass: "class-yellow",
            },
        ],
        Thur: [
            {
                id: 1,
                code: "GEO 101",
                location: "EARTH SCIENCES",
                time: "9:30 AM",
                colorClass: "class-blue",
            },
            {
                id: 2,
                code: "SOC 202",
                location: "FACULTY HALL",
                time: "01:30 PM",
                colorClass: "class-purple",
                hasSchedule: true,
            },
        ],
        Fri: [
            {
                id: 1,
                code: "ENG 303",
                location: "LANGUAGE LAB",
                time: "10:00 AM",
                colorClass: "class-yellow",
            },
            {
                id: 2,
                code: "CSC 305",
                location: "COMPUTER LAB",
                time: "12:30 PM",
                colorClass: "class-green",
            },
            {
                id: 3,
                code: "PHY 205",
                location: "PHYSICS LAB",
                time: "03:00 PM",
                colorClass: "class-purple",
            },
        ],
    }

    // Get classes for the active day
    const currentClasses = classSchedules[activeDay] || []

    // Handle day click
    const handleDayClick = (day) => {
        setActiveDay(day)
    }

    return (
        <div className="timetable-container">
            <h1 className="timetable-title">Timetable</h1>

            <div className="timetable-card">
                <div className="days-row">
                    {days.map((day) => (
                        <div
                            key={day}
                            className={`day-item ${day === activeDay ? "active-day" : ""}`}
                            onClick={() => handleDayClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="classes-section">
                    <h2 className="classes-title">Classes</h2>

                    {currentClasses.length > 0 ? (
                        <div className="classes-list">
                            {currentClasses.map((classItem) => (
                                <div key={classItem.id} className={`class-item ${classItem.colorClass}`}>
                                    <div className="class-info">
                                        <div className="class-code">{classItem.code}</div>
                                        <div className="class-location">{classItem.location}</div>
                                    </div>
                                    <div className="class-time-container">
                                        <div className="class-time">{classItem.time}</div>
                                        {classItem.hasSchedule && <div className="schedule-label">Schedule</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-classes">No classes scheduled for this day</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TimeTablePanel