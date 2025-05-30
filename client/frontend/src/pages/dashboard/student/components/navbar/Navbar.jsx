import React, { useState } from 'react'
import "../../../dashboard.css";
import { FiSearch } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import userImage from "../../../../../assets/dashboard/images/user-image.png"
import NotificationBox from '../../../components/notification-box/NotificationBox';
// import NotificationBox from '../notification-box/NotificationBox';


const Navbar = () => {
    const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);

    const handleNotificationIconClick = () => {
        setNotificationModalOpen(true);
    };
    const handleNotificationModalClose = () => {
        setNotificationModalOpen(false);
    };

    return (
        <>
            <header className="dashboard-header">
                <div className="greeting">
                    <h1>Good Afternoon</h1>
                    <p>Welcome Back</p>
                </div>
                <div className="header-right">
                    <div className="search-bar">
                        <FiSearch className="search-icon " />
                        <input type="text" placeholder="Search" />
                    </div>

                    <div className="flex items-center notification-center">
                        <div className="notification-message-icon">
                            <LuMessageCircleMore />
                        </div>
                        <div className="notification-icon" onClick={handleNotificationIconClick}>
                            <IoIosNotificationsOutline />
                        </div>
                        <div className="user-profile">
                            <div className="avatar">
                                <img src={userImage} alt="User Avatar" />
                            </div>
                            <div className="user-info">
                                <div className="user-name">Anddy's Makeover</div>
                                <div className="user-role">Admin</div>
                            </div>
                            <span className="dropdown-icon">
                                <FaChevronDown />
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* diplay notification box  */}
            <NotificationBox isOpen={isNotificationModalOpen} onClose={handleNotificationModalClose} />
        </>
    )
}

export default Navbar