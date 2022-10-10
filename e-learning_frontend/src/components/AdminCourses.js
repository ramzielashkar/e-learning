import Course from './Course';
import AssignCourses from './AssignCourses';
import AddCourse from './AddCourse';
import Button from './Button';
import { useState, useEffect } from "react";

const AdminCourses = () =>{
  const showAssignPopup = () => {
    setShowAssignCourse(true);
  };
  const closeAssignPopup = () => {
    setShowAssignCourse(false);
  };
  const showAddPopup = () => {
    setShowAddCourse(true);
  };
  const closeAddPopup = () => {
    setShowAddCourse(false);
  };

  const [coursename, setCourseName] = useState("Web");
  const [instructor, setInstructor] = useState("Ramzi");
  const [image, setImage] = useState("../assets/download.jpeg")
  const [showAssignCourse, setShowAssignCourse] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Courses</h1>
      <div className='add-course-btn flex'>
        <Button
        text = {'Add Course'}
        color = {'btn-purple'}
        onClick = {() => {
          showAddPopup();
        }}
        />
      </div>
      <div className = 'allcourses flex'>
        <Course
        onClick = {() => {
          showAssignPopup();
        }}
         />
      </div>
    </section>
    <AssignCourses
    text = {'Instructor'}
    open = {showAssignCourse}
    coursename = {coursename}
    onClose = {() => {
      closeAssignPopup();
    }}
    />
    <AddCourse
    open = {showAddCourse}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default AdminCourses;
