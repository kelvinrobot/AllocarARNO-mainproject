import React from 'react'
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiAiGenerate } from 'react-icons/ri';
import { SiDavinciresolve } from 'react-icons/si';
import { Link } from 'react-router-dom';

const QuickActionsPanel = () => {
    return (
        <>
            <div className="quick-actions-panel">
                <h2 className="panel-title">Quick Actions</h2>
                <div className="quick-actions">
                    <Link to="/dashboard/generate-timetable" className="action-button">
                        <span className="action-icon"><RiAiGenerate /></span>
                        <span className="action-text">Generate Timetable</span>
                    </Link>

                    <Link to="/dashboard/resolve-conflicts" className="action-button">
                        <span className="action-icon"><SiDavinciresolve /></span>
                        <span className="action-text">Resolve Conflicts</span>
                    </Link>

                    <Link to="/dashboard/publish" className="action-button">
                        <span className="action-icon"><MdOutlinePublishedWithChanges /></span>
                        <span className="action-text">Publish to Blockchain</span>
                    </Link>

                </div>
            </div>
        </>

    )
}

export default QuickActionsPanel