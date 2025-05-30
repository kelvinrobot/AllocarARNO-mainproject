
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDownLeft } from "react-icons/lu";
import { FaCube } from "react-icons/fa6";
import "./notifications.css"

const Notifications = () => {
    return (
        <div className="student dashboard-panel">
            <h2 className="panel-title">Notifications</h2>
            <div className="notifications-list">
                <a href="">
                    <div className="notification-item">
                        <div className="notification-icon" style={{ backgroundColor: "#7D7AE5" }}>
                            <FiArrowUpRight />
                        </div>
                        <div className="notification-content">
                            <div className="notification-text">Your class starts in 15 minutes: PHY301</div>
                        </div>
                        <div className="flex items-center notification-time">15mins ago
                            <FaChevronRight className='notification-text-arrow-icon' />
                        </div>
                    </div>
                </a>
                <a href="">

                    <div className="notification-item">
                        <div className="notification-icon" style={{ backgroundColor: "#5CE499" }}>
                            <FiArrowUpRight />
                        </div>
                        <div className="notification-content">
                            <div className="notification-text">CHM205 will now hold in CBT Hall B instead of LT1</div>
                        </div>
                        <div className="flex items-center notification-time">1hr ago
                            <FaChevronRight className='notification-text-arrow-icon' />
                        </div>
                    </div>
                </a>

                <a href="">

                    <div className="notification-item">
                        <div className="notification-icon" style={{ backgroundColor: "#FF7576" }}>
                            <LuArrowDownLeft />
                        </div>
                        <div className="notification-content">
                            <div className="notification-text">Your timetable for next week has been updated</div>
                        </div>
                        <div className="flex items-center notification-time">April 28
                            <FaChevronRight className='notification-text-arrow-icon' />
                        </div>
                    </div>
                </a>

                <a href="">

                    <div className="notification-item">
                        <div className="notification-icon" style={{ backgroundColor: "#7B6FFF" }}>
                            <FiArrowUpRight />
                        </div>
                        <div className="notification-content">
                            <div className="notification-text">Your PHY205 complaint has been resolved</div>
                        </div>
                        <div className="flex items-center notification-time">April 28
                            <FaChevronRight className='notification-text-arrow-icon' />
                        </div>
                    </div>
                </a>

                <a href="">

                    <div className="notification-item">
                        <div className="notification-icon" style={{ backgroundColor: "#80FFB0" }}>
                            <FaCube />
                        </div>
                        <div className="notification-content">
                            <div className="notification-text">Classroom Availability</div>
                        </div>
                        <div className="flex items-center notification-time">April 28
                            <FaChevronRight className='notification-text-arrow-icon' />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Notifications