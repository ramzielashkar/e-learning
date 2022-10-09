import Course from './Course';
import AssignCourses from './AssignCourses';
import { useState, useEffect } from "react";

const AdminCourses = () =>{
  const showAssignPopup = () => {
    setShowAssignCourse(true);
  };
const closeAssignPopup = () => {
  setShowAssignCourse(false);
};

  const [coursename, setCourseName] = useState("Web");
  const [instructor, setInstructor] = useState("Ramzi");
  const [image, setImage] = useState("../assets/download.jpeg")
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
    onClose = {() => {
      closeAssignPopup();
    }}
    />
    </>
  );
};
export default AdminCourses;
