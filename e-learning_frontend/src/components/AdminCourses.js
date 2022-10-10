import Course from './Course';
import AssignCourses from './AssignCourses';
import AddCourse from './AddCourse';
import Button from './Button';
import { useState, useEffect } from "react";
import { getAllCourses } from '../Hooks/getAllCourses';

const AdminCourses = () =>{
  const token = localStorage.getItem('token');
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const coursesFromServer = await getAllCourses(token);
      console.log(coursesFromServer.data.courses);
      setAllCourses(coursesFromServer.data.courses);
    };
    getCourses(token);
  }, []);
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
        {  allCourses.map((course, index)  => {
          //console.log(course.name);
          return (
            <Course
            coursename = {course.name}
            image = {course.image}
            text = 'Assign'
            onClick = {() => {
              showAssignPopup();
            }}
             />
          );
        })}

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
