import os
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import hashlib
import json

app = FastAPI()

# Define the structure of the input data
class Course(BaseModel):
    course_code: str
    lecturer: str
    student_group: str

class ScheduleInput(BaseModel):
    courses: List[Course]
    available_times: List[str]
    available_halls: List[str]

@app.post("/generate-schedule")
def generate_schedule(data: ScheduleInput):
    timetable = []
    used_slots = set()
    lecturer_schedule = {}
    group_schedule = {}
    unscheduled_courses = []

    for course in data.courses:
        slot_assigned = False

        for time in data.available_times:
            # Check conflicts
            if time in lecturer_schedule.get(course.lecturer, []) or time in group_schedule.get(course.student_group, []):
                continue

            for hall in data.available_halls:
                slot = (time, hall)
                if slot not in used_slots:
                    # Assign slot
                    timetable.append({
                        "course_code": course.course_code,
                        "lecturer": course.lecturer,
                        "student_group": course.student_group,
                        "time": time,
                        "hall": hall
                    })
                    used_slots.add(slot)

                    lecturer_schedule.setdefault(course.lecturer, []).append(time)
                    group_schedule.setdefault(course.student_group, []).append(time)

                    slot_assigned = True
                    break

            if slot_assigned:
                break

        if not slot_assigned:
            # Could not schedule this course
            unscheduled_courses.append({
                "course_code": course.course_code,
                "lecturer": course.lecturer,
                "student_group": course.student_group
            })

    # Create hash of the scheduled part
    timetable_str = json.dumps(timetable, sort_keys=True)
    timetable_hash = hashlib.sha256(timetable_str.encode()).hexdigest()

    # Save output to a file
    output_data = {
        "timetable": timetable,
        "hash": timetable_hash,
        "unscheduled_courses": unscheduled_courses
    }

    os.makedirs("saved", exist_ok=True)

    with open("saved/timetable.json", "w") as f:
        json.dump(output_data, f, indent=2)

    return output_data

