"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./footer.css"
import Container from "../container/Container"
import allocarnoLogoWhitebg from "../../assets/logo/Allocarno-whitebg.svg"
import linkedIn from "../../assets/svgs/social-icons/linkedIn.svg"
import facebook from "../../assets/svgs/social-icons/facebook.svg"
import x from "../../assets/svgs/social-icons/x.svg"

const Footer = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        // Reset form
        setEmail("")
        // You would typically send this to your backend
    }

    return (
        <Container>
            <footer>
                <div className="footer">
                    <div className="footer-container">
                        <div className="footer-top">
                            <div className="footer-logo-nav">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img src={allocarnoLogoWhitebg} alt="" />
                                    </Link>
                                </div>

                                <nav className="footer-nav">
                                    <a href="/" className="footer-nav-link">
                                        Home
                                    </a>
                                    <a href="/about" className="footer-nav-link">
                                        About Allocarno
                                    </a>
                                    <a href="/universities" className="footer-nav-link">
                                        For Universities
                                    </a>
                                    <a href="/others" className="footer-nav-link">
                                        Others
                                    </a>
                                </nav>

                                <div className="footer-social">
                                    <Link to="">
                                        <span className="social-icon" >
                                            <img src={linkedIn} alt="linkedIn" />
                                        </span>
                                    </Link>
                                    <Link to="">
                                        <span className="social-icon" >
                                            <img src={facebook} alt="facebook" />
                                        </span>
                                    </Link>
                                    <Link to="">
                                        <span className="social-icon" >
                                            <img src={x} alt="linkedIn" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="footer-main mt-[3rem]">
                            <div className="footer-info">
                                <div className="contact-section">
                                    <h3 className="contact-heading">Contact us:</h3>
                                    <p className="contact-info">Email: info@allocarno.com</p>
                                    <p className="contact-info">Phone: 555-567-8901</p>
                                    <p className="contact-info">
                                        Address: 1234 Main St
                                        <br />
                                        Stroge City, Allocarno street 12345
                                    </p>
                                </div>
                            </div>

                            <div className="newsletter-section">
                                <form onSubmit={handleSubmit} className="newsletter-form">
                                    <div className="flex gap-[1rem]">                               <div className="">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="newsletter-input"
                                        />
                                    </div>
                                        <div className="">
                                            <button type="submit" className="subscribe-button">
                                                Subscribe to news
                                            </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="footer-divider"></div>

                        <div className="footer-bottom">
                            <p className="copyright">© 2025 Allocarno. All Rights Reserved.</p>
                            <a href="/privacy" className="privacy-link">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Container>
    )
}

export default Footer
