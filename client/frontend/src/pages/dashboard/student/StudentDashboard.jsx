import React from 'react'
import "./studentDashboard.css"
import Navbar from '../../dashboard/student/components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import TimeTable from './components/timetable/TimeTable'
import Complaints from './components/complaints/Complaints'
import Notifications from './components/notification/Notifications'

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />

      {/* sidebar area */}
      <div className="dashboard-main">
        {/* include side bar */}
        <Sidebar currentPage="dashboard" />

        
      </div>
    </div>
  )
}

export default StudentDashboard