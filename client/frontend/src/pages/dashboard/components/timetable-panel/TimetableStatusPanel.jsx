import React from 'react'
import QuickActionsPanel from '../quick-action-panel/QuickActionsPanel'

const TimetableStatusPanel = () => {
    return (
        <div className="dashboard-panel">
            <div className="panel-header">
                <h2 className="panel-title">Timetable Status</h2>
                <div className="panel-subtitle">
                    <span className="status-label">Ongoing Class</span>
                    <span className="status-date">Today</span>
                </div>
            </div>
            <div className="timetable-list">
                <div className="timetable-item">
                    <div className="course-code">PHY 101</div>
                    <div className="course-time">1:00 PM</div>
                </div>
                <div className="timetable-item">
                    <div className="course-code">ARC 203</div>
                    <div className="course-time">1:00 PM</div>
                </div>
                <div className="timetable-item">
                    <div className="course-code">MTS 501</div>
                    <div className="course-time">1:00 PM</div>
                </div>
                <div className="timetable-item">
                    <div className="course-code">GNS 106</div>
                    <div className="course-time">1:00 PM</div>
                </div>
                <div className="timetable-item">
                    <div className="course-code">CSC 201</div>
                    <div className="course-time">1:00 PM</div>
                </div>
            </div>
            <button className="see-all-button">See All</button>

            {/* Quick Actions Panel */}
            <QuickActionsPanel/>
        </div>
    )
}

export default TimetableStatusPanel