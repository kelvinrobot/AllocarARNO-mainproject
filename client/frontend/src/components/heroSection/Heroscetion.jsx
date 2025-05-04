import React from 'react'
import './herosection.css'
import notificationIcon from '../../assets/svgs/notificationIcon.svg'

const Heroscetion = () => {
  function handleFormSubmit(e) {
    // prevent page reload
    e.preventDefault()
    //  handle form submission
  }
  return (

    <section className="hero">
      <div className="notification">
        <span><img src={notificationIcon}/></span>
        <span className="notification-text">10,000+ Smart Students Convinced</span>
      </div>

      <h1 className="hero-title">
        Let AI Handle <br />
        <span className="hero-title-highlight">Scheduling</span> While You Rest
      </h1>

      <p className="hero-description">
        No more manual planning. Just conflict-stress-free timetables powered by AI, secured <br />
        by Calgarno, and built for real academic peace of mind.
      </p>

      <form onSubmit={handleFormSubmit}>
        <div className="gap-8 hero-form">
          <input type="email" placeholder="Enter your email" className="email-input" required/>
          <button className="join-beta-btn" type="submit">Join Beta</button>
        </div>
      </form>
    </section >
  )
}

export default Heroscetion