import React, { useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./complain.css"
import ConfirmModal from './modals/ConfirmModal'
import SuccessModal from './modals/SuccessModal'

const Complain = () => {
    const [complaint, setComplaint] = useState("")
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const handleSubmitClick = (e) => {
        e.preventDefault()
        if (complaint.trim()) {
            setShowConfirmModal(true)
        } else {
            alert("Please enter your complaint before submitting")
        }
    }

    const handleConfirmSubmit = () => {
        // Here you would typically send the data to a server
        console.log("Complaint submitted:", complaint)

        // Close confirm modal and show success modal
        setShowConfirmModal(false)
        setShowSuccessModal(true)
    }

    const handleCloseSuccess = () => {
        setShowSuccessModal(false)
        setComplaint("") // Clear the form
    }

    return (
        <div className="dashboard-container">
            <Navbar />

            {/* sidebar area */}
            <div className="dashboard-main">
                {/* include side bar */}
                <Sidebar currentPage="complain" />

                {/* main dashboard area */}
                <div className="content-area student">
                    <div className="complaint-container">
                        <h1 className="complaint-title">Make a Complaint</h1>
                        <p className="complaint-instructions">
                            Explain the issue clearly. Include course codes,
                            <br />
                            affected times or dates, and any other relevant info
                        </p>

                        <form onSubmit={handleSubmitClick}>
                            <div className="textarea-container">
                                <textarea
                                    className="complaint-textarea"
                                    placeholder="TYPE YOUR MESSAGE"
                                    value={complaint}
                                    onChange={(e) => setComplaint(e.target.value)}
                                    rows={10}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                Submit Complaint
                            </button>
                        </form>
                    </div>

                    {showConfirmModal && <ConfirmModal onClose={() => setShowConfirmModal(false)} onConfirm={handleConfirmSubmit} />}
                    {showSuccessModal && <SuccessModal onClose={handleCloseSuccess} />}
                </div>
            </div>
        </div>
    )
}

export default Complain