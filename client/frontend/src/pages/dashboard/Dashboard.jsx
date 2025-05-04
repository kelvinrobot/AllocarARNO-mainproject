import "./dashboard.css"

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Matrics from "./components/matrics-panel/Matrics";
import NotificationPanel from "./components/notification-panel/NotificationPanel";
import TimetableStatusPanel from "./components/timetable-panel/TimetableStatusPanel";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />

            {/* sidebar area */}
            <div className="dashboard-main">
                {/* include side bar */}
                <Sidebar currentPage="dashboard" />

                {/* main dashboard area */}
                <div className="content-area">
                    <div className="flex">
                        {/* Left Column */}
                        <div className="dashboard-column left">
                            {/* Metrics Panel */}
                            <Matrics />

                            {/* Notifications Panel */}
                            <NotificationPanel />
                        </div>

                        {/* Right Column */}
                        <div className="dashboard-column right">
                            {/* Timetable Status Panel */}
                            <TimetableStatusPanel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
