"use client"

import { useState, useRef } from "react"
import { FiUploadCloud } from "react-icons/fi"
import "./fileUpload.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const FileUpload = () => {
  const [file, setFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const uploadedFile = e.dataTransfer.files[0]
      if (uploadedFile.size <= 10 * 1024 * 1024) {
        // 10MB in bytes
        setFile(uploadedFile)
      } else {
        alert("File size exceeds 10MB limit")
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0]
      if (uploadedFile.size <= 10 * 1024 * 1024) {
        // 10MB in bytes
        setFile(uploadedFile)
      } else {
        alert("File size exceeds 10MB limit")
      }
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      console.log("Uploading file:", file)
      // You would typically send this to your server
      alert(`File "${file.name}" is ready to upload!`)
    } else {
      alert("Please select a file first")
    }
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      {/* sidebar area */}
      <div className="dashboard-main">
        {/* include the sidebar */}
        <Sidebar currentPage="upload" />

        {/* main File upload area */}
        <div className="content-area">
          <div className="file-upload-container">
            <h1 className="text-center upload-title">Upload your Files</h1>
            <p className="text-center upload-description">
              Upload your course schedule in <span className="format">.PDF</span>, <span className="format">.CSV</span>, or{" "}
              <span className="format">.DOCX</span> format (Max: 10MB)
            </p>

            <div
              className={`upload-area ${isDragging ? "dragging" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.csv,.docx"
                style={{ display: "none" }}
              />

              <div className="upload-content">
                <div className="upload-icon">
                  <FiUploadCloud size={40} />
                </div>
                <p className="upload-text">{file ? file.name : "Drag and drop or click to choose files"}</p>
                <p className="file-size-info">
                  <span className="info-icon"><AiOutlineExclamationCircle /></span> Max file size 10MB
                </p>
              </div>
            </div>

            <button className="upload-button" onClick={handleUpload} disabled={!file}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileUpload
