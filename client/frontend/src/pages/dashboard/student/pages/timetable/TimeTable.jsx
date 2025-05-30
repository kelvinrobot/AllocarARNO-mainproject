import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeTablePanel from '../../components/timetable/TimeTable'
import Complaints from '../../components/complaints/Complaints'
import Notifications from '../../components/notification/Notifications'

const TimeTable = () => {
    return (
        <div className="dashboard-container">
            <Navbar />

            {/* sidebar area */}
            <div className="dashboard-main">
                {/* include side bar */}
                <Sidebar currentPage="timetable" />

                {/* main dashboard area */}
                <div className="content-area student">
                    <div className="flex">
                        {/* Left Column */}
                        <div className="dashboard-column left">
                            <TimeTablePanel />
                        </div>

                        {/* Right Column */}
                        <div className="dashboard-column right">
                            <Complaints />
                            {/* Notifications Panel */}
                            <Notifications />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeTable