# AllocARNO AI

## Project Description
AllocARNO AI is an AI-powered academic scheduling system developed as a hackathon project. It automates the creation of conflict-free university timetables by leveraging intelligent scheduling algorithms.

Scheduling academic courses is often complex due to overlapping lecturer availabilities and student group constraints. AllocARNO AI addresses this challenge by generating optimized timetables with built-in conflict detection. The final timetable is hashed and stored (e.g., on a blockchain) to ensure immutability and transparency.

## Features
Intelligent Scheduling: Automatically generates academic timetables with no lecturer or student group conflicts.  
Conflict Detection: Checks for scheduling clashes for both lecturers and student groups, ensuring a realistic schedule.  
Unschedulable Courses Reported: Identifies any courses or classes that could not be scheduled, listing them separately.  
Blockchain Verification: Creates a cryptographic hash of the timetable and saves it on a blockchain (e.g., Cardano) for secure, tamper-proof verification.  
JSON Output: Saves the final timetable (and unscheduled courses) into a JSON file for easy export and review.  
FastAPI Backend: Built on FastAPI for a robust, high-performance RESTful API interface.  

## Technologies Used
Python 3.x – Programming language for AI logic and backend development.  
FastAPI – Web framework for creating the REST API.  
Uvicorn – ASGI server for running the FastAPI application.  
Pydantic– Data validation and settings management.  
Hashlib (SHA-256) – For generating secure hashes of the timetable.  
JSON – Data format for storing the output.  
(Optional) Cardano Blockchain – Can be integrated for on-chain verification of the schedule hash.  

## Installation Instructions
1. Clone the Repository:  
   ```bash
   git clone https://github.com/kelvinrobot/AllocARNO-AI.git
   cd AllocARNO-AI
   ```
2. Create a Virtual Environment (optional but recommended):  
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\\Scripts\\activate`
   ```
3. Install Dependencies:  
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Server:  
   ```bash
   uvicorn main:app --reload
   ```
   The FastAPI server should now be running on `http://127.0.0.1:8000/`.

## API Usage
After starting the server, you can generate the timetable and view results via the API:  
- Visit the interactive API documentation at `http://127.0.0.1:8000/docs` to explore available endpoints.  
- Example: To generate a timetable (assuming a GET endpoint `/schedule` exists):  
  ```bash
  curl -X GET "http://127.0.0.1:8000/schedule"
  ```
  The API will return a JSON response containing the conflict-free timetable. The full schedule is also saved to a `timetable.json` file in the project directory.  
- Any courses that could not be scheduled will be listed under `unscheduled_courses` in the JSON output.  

## Project Status
Phase 1 complete — AI Engine .
phase 2 advancing to deep machine learning engine after MVP stage

## Credits
Developed by Kelvin (GitHub: [kelvinrobot](https://github.com/kelvinrobot)).
