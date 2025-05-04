import React from 'react'

const Matrics = () => {
    return (
        <div className="dashboard-panel">
            <h2 className="panel-title">Scheduling Metrics</h2>
            <div className="px-4">
                <div className="metrics-chart">

                    <div className="chart-bars">
                        <div >
                            <span className='flex justify-center chart-value'>1</span>
                            <div className="chart-bar" style={{ height: "30px", backgroundColor: "#FFBB4F" }}>
                            </div> {/* maximum heught is 120px */}
                        </div>
                        <div>
                            <span className='flex justify-center chart-value'>5</span>
                            <div className="chart-bar" style={{ height: "60px", backgroundColor: "#FFDA93" }}>
                            </div>
                        </div>

                        <div>
                            <span className='flex justify-center chart-value'>3</span>
                            <div className="chart-bar" style={{ height: "40px", backgroundColor: "#FF7576" }}>
                            </div>

                        </div>
                        <div>
                            <span className='flex justify-center chart-value'>10</span>
                            <div className="chart-bar" style={{ height: "75px", backgroundColor: "#5CE499" }}>

                            </div>
                        </div>
                    </div>
                    <div className="chart-labels">
                        <div className="chart-label">a</div>
                        <div className="chart-label">x</div>
                        <div className="chart-label">o</div>
                        <div className="chart-label">n</div>
                    </div>
                </div>
                <div className="metrics-list">
                    <div className="metric-item">
                        <div className="flex items-start justify-center metric-icon" style={{ backgroundColor: "#FFBB4F" }}>a</div>
                        <div className="metric-label">Total Timetables Generated</div>
                        <div className="metric-value">120</div>
                    </div>
                    <div className="metric-item">
                        <div className="flex items-start justify-center metric-icon" style={{ backgroundColor: "#FFDA93" }}>x</div>
                        <div className="metric-label">Cancelled Classes</div>
                        <div className="metric-value">120</div>
                    </div>
                    <div className="metric-item">
                        <div className="flex items-start justify-center metric-icon" style={{ backgroundColor: "#FF7576" }}>o</div>
                        <div className="metric-label">Pending Schedule Conflicts</div>
                        <div className="metric-value">120</div>
                    </div>
                    <div className="metric-item">
                        <div className="flex items-start justify-center metric-icon" style={{ backgroundColor: "#5CE499" }}>n</div>
                        <div className="metric-label">Active Venues</div>
                        <div className="metric-value">120</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matrics