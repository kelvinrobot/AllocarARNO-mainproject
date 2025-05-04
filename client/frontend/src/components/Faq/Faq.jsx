"use client"

import { useState } from "react"

import "./faq.css"
import Container from "../container/Container"
import { FaChevronRight } from "react-icons/fa6";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0) // Default to the First question as shown in the image

    const faqItems = [
        {
            id: 0,
            question: "What is a Allocarno",
            answer:
                "Allocarno is an AI-powered scheduling platform designed to create conflict-free timetables for students and academic institutions.",
        },
        {
            id: 1,
            question: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
            answer:
                "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
        },
        {
            id: 2,
            question: "What platforms does ACME payment gateway support?",
            answer:
                "ACME payment gateway supports all major platforms including web, mobile, and desktop applications across various operating systems.",
        },
        {
            id: 3,
            question: "Does ACME provide international payments support?",
            answer:
                "Yes, ACME provides comprehensive international payment support with competitive exchange rates and minimal processing fees.",
        },
        {
            id: 4,
            question: "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
            answer:
                "No, there are no hidden setup fees or annual maintenance charges. You only pay for the transactions processed through our platform.",
        },
    ]

    const handleQuestionClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <Container>
            <section className="faq">
                <h2 className="faq-title">Frequently Asked Questions</h2>

                <div className="faq-container">
                    <div className="faq-questions">
                        {faqItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`faq-question-item ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleQuestionClick(index)}
                            >
                                <div className="faq-question-bullet"></div>
                                <div className="faq-question-text">{item.question}</div>
                                <div className="faq-question-arrow"><FaChevronRight /></div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-answer-panel">
                        <h3 className="faq-answer-title">{faqItems[activeIndex].question}</h3>
                        <p className="faq-answer-text">{faqItems[activeIndex].answer}</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default FAQ
