[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/MhkFIDKy)

<h2>K.C.S.Madhumalka - IT21252754</h2>

# University Timetable Management System

## Setup Instructions

1. **Clone the repository:**

git clone sliitcsse/assignment-01-Chamaththa123

2. **Install dependencies:**

cd assignment-01-Chamaththa123<br>
npm install

3. **Run the application:**

npm start

## API Endpoint Documentation

The server will start running on http://localhost:8000/api by default.<br>

### User Route

POST - /user/register <br>
POST - /user/login <br>

### Class Room Route

POST - /classroom/  (createClassRoom)<br>
GET - /classroom/login  (getClassRooms)<br>
GET - /classroom/:classRoomId  (getClassRoomById)<br>
PUT - /classroom/:classRoomId (updateClassRoom)<br>
DELETE  - /classroom/:classRoomId (deleteClassRoom)<br>

### Course Route

POST - /course/  (createCourse)<br>
GET - /course/  (getCourses)<br>
GET - /course/:courseId  (getClassRoomById)<br>
POST - /course/:assign-faculty (assignFaculty)<br>
PUT  - /course/:courseId/:facultyId (removeFaculty)<br>
DELTE  - /course/:courseId (deleteCourse)<br>
PUT  - /course/:courseId (updateCourse)<br>

### Notification Route

POST - /notification/  (addAnnouncement)<br>
GET - /notification/  (getAllNotifications)<br>
DELTE  - /notification/:announcementId (removeAnnouncement)<br>

### Session Route

POST - /session/  (createSession)<br>
GET - /session/  (getCourses)<br>
GET - /session/classroom/:classRoomId  (getSessionByClassRoomId)<br>
GET - /session/available/  (getAvailableSessions)<br>
GET - /session/booked  (getBookedSessions)<br>
PUT  - /session/:id (updateSession)<br>
DELTE  - /session/:id (deleteSession)<br>

### Student Enrollment Route

POST - /enrollment/  (enrollStudentInCourse)<br>
GET - /enrollment/student/:studentId  (getStudentEnrollments)<br>
GET - /enrollment/course/:courseId  (getAllEnrollmentForCourse)<br>
DELTE  - /enrollment/:enrollmentId (unenrollStudentFromCourse)<br>

### Timetable Route

POST - /timetable/  (createTimetable)<br>
POST - /timetable/add-session  (addSessionToTimetable)<br>
GET - /timetable/:courseId  (getCourseTimetable)<br>
GET - /timetable/notifications/  (getTimetableNotifications)<br>
DELTE  - /timetable/:timetableId/:sessionId (removeSessionFromtimetable)<br>
DELTE  - /timetable/:timetableId (removeTimetableById)<br>

## Test

### Unit Testing

Directory - assignment-01-Chamaththa123\test\unit_test<br>
Command - npm test

### Performance Testing

Directory - assignment-01-Chamaththa123\test\performance_test<br>
Command - artillery run test.yml


### postman Documantaion : 
https://documenter.getpostman.com/view/29113573/2sA35Bc4hd