import React, { useState } from 'react'
import "./saveDraft.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const SaveDraft = () => {
    // Sample data for saved drafts
    const [drafts, setDrafts] = useState([
        { id: 1, name: "#Timetable draft 1", date: "30th April, 2025", selected: false },
        { id: 2, name: "#Timetable draft 2", date: "30th April, 2025", selected: false },
        { id: 3, name: "#Timetable draft 3", date: "30th April, 2025", selected: false },
        { id: 4, name: "#Timetable draft 4", date: "30th April, 2025", selected: false },
        { id: 5, name: "#Timetable draft 5", date: "30th April, 2025", selected: false },
        { id: 6, name: "#Timetable draft 6", date: "30th April, 2025", selected: false },
        { id: 7, name: "#Timetable draft 7", date: "30th April, 2025", selected: false },
        { id: 8, name: "#Timetable draft 8", date: "30th April, 2025", selected: false },
    ])

    const [visibleDrafts, setVisibleDrafts] = useState(5)
    const [loading, setLoading] = useState(false)

    // Toggle selection of a draft
    const toggleDraftSelection = (id) => {
        setDrafts(
            drafts.map((draft) => {
                if (draft.id === id) {
                    return { ...draft, selected: !draft.selected }
                }
                return draft
            }),
        )
    }

    // Handle edit draft
    const handleEditDraft = (id) => {
        console.log(`Editing draft with id: ${id}`)
        // Implement your edit functionality here
    }

    // Load more drafts
    const loadMoreDrafts = () => {
        setLoading(true)
        // Simulate API call to load more drafts
        setTimeout(() => {
            setVisibleDrafts((prev) => prev + 5)
            setLoading(false)
        }, 1000)
    }
    return (
        <div className="dashboard-container">
            <Navbar />
            {/* sidebar area */}
            <div className="dashboard-main">
                {/* include the sidebar */}
                <Sidebar currentPage="saves-draft" />

                {/* main saved draft area */}
                <div className="content-area">
                    <div className="save-draft-container">
                        <div className="drafts-list">
                            {/*  */}
                            {drafts.slice(0, visibleDrafts).map((draft) => (
                                <div key={draft.id} className="draft-item">
                                    <div className="draft-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={draft.selected}
                                            onChange={() => toggleDraftSelection(draft.id)}
                                            id={`draft-${draft.id}`}
                                        />
                                        <label htmlFor={`draft-${draft.id}`} className="checkbox-label"></label>
                                    </div>
                                    <div className="draft-name">{draft.name}</div>
                                    <div className="draft-date">{draft.date}</div>
                                    <button className="edit-draft-button" onClick={() => handleEditDraft(draft.id)}>
                                        Edit Draft
                                    </button>
                                </div>
                            ))}
                        </div>

                        {visibleDrafts < drafts.length && (
                            <div className="load-more-container">
                                <button className="load-more-button" onClick={loadMoreDrafts} disabled={loading}>
                                    {loading ? "Loading..." : "Load More"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveDraft