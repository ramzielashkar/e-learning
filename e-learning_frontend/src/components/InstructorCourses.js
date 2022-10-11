import Course from './Course';
import AssignCourses from './AssignCourses';
import Button from './Button';
import { useState, useEffect } from "react";
import { getCourses } from '../Hooks/getInstructorCourses';
import EnrollStudent from '../pages/EnrollStudent';
import { enrollStudent } from '../Hooks/EnrollStudent';
const InstructorCourses = () =>{
  //functions to show/hide Assign Course Popup
  const showAssignPopup = (coursename) => {
    setCourseName(coursename);
    setShowAssignCourse(true);
  };
  const closeAssignPopup = () => {
    setShowAssignCourse(false);
  };

  const [coursename, setCourseName] = useState("");
  const [student, setStudent] = useState("");
  const [showAssignCourse, setShowAssignCourse] = useState(false);
  const token = localStorage.getItem('token');
  const [courses, setCourses] = useState([]);

  //function to enroll students in a course
  const enroll = async (student , coursename)=>{
    const res = await enrollStudent({student, coursename}, token);
    console.log(res);
  }

  //function to fetch get Courses API
  useEffect(() => {
    const getInstructorCourses = async () => {
      const coursesFromServer = await getCourses(token);
      console.log(coursesFromServer.data.courses);
      setCourses(coursesFromServer.data.courses);
    };
    getInstructorCourses(token);
    
  },[]);



  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Courses</h1>
      <div className = 'allcourses flex'>
      {  courses.map((course, index)  => {
          return (
            <Course
            coursename = {course.name}
            image = {course.image}
            text = 'Enroll'
            onClick = {() => {
              showAssignPopup(course.name);
            }}
             />
          );
        })}

      </div>
    </section>
    <EnrollStudent
    onAdd = {enroll}
    open = {showAssignCourse}
    coursename = {coursename}
    text = {'Student'}
    onClose = {() => {
      closeAssignPopup();
    }}
    />
    </>
  );
};
export default InstructorCourses;
