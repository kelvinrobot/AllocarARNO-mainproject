from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import hashlib
import json
import random

app = FastAPI()

# Input Models
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

    # Shuffle input for true randomness
    shuffled_courses = data.courses.copy()
    random.shuffle(shuffled_courses)

    for course in shuffled_courses:
        slot_assigned = False

        # Generate all possible (time, hall) combinations and shuffle
        all_slots = [(time, hall) for time in data.available_times for hall in data.available_halls]
        random.shuffle(all_slots)

        for time, hall in all_slots:
            if time in lecturer_schedule.get(course.lecturer, []):
                continue
            if time in group_schedule.get(course.student_group, []):
                continue
            if (time, hall) in used_slots:
                continue

            # Assign slot
            timetable.append({
                "course_code": course.course_code,
                "lecturer": course.lecturer,
                "student_group": course.student_group,
                "time": time,
                "hall": hall
            })

            used_slots.add((time, hall))
            lecturer_schedule.setdefault(course.lecturer, []).append(time)
            group_schedule.setdefault(course.student_group, []).append(time)

            slot_assigned = True
            break

        if not slot_assigned:
            unscheduled_courses.append({
                "course_code": course.course_code,
                "lecturer": course.lecturer,
                "student_group": course.student_group
            })

    # Generate hash for result
    timetable_str = json.dumps(timetable, sort_keys=True)
    timetable_hash = hashlib.sha256(timetable_str.encode()).hexdigest()

    return {
        "timetable": timetable,
        "unscheduled_courses": unscheduled_courses,
        "hash": timetable_hash
    }
