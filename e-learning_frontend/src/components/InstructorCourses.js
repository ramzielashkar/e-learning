import Course from './Course';
import AssignCourses from './AssignCourses';
import Button from './Button';
import { useState, useEffect } from "react";

const InstructorCourses = () =>{
  const showAssignPopup = () => {
    setShowAssignCourse(true);
  };
  const closeAssignPopup = () => {
    setShowAssignCourse(false);
  };

  const [coursename, setCourseName] = useState("Web");
  const [student, setStudent] = useState("Ramzi");
  const [showAssignCourse, setShowAssignCourse] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Courses</h1>
      <div className = 'allcourses flex'>
        <Course
        onClick = {() => {
          showAssignPopup();
        }}
         />
      </div>
    </section>
    <AssignCourses
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
