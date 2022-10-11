import Course from './Course';
import AssignCourses from './AssignCourses';
import AddCourse from './AddCourse';
import Button from './Button';
import { useState, useEffect } from "react";
import { getAllCourses } from '../Hooks/getAllCourses';
import { addCourse } from '../Hooks/AddCourse';
import { assignCourse } from '../Hooks/AssignCourses';

const AdminCourses = () =>{
  const token = localStorage.getItem('token');
  const [allCourses, setAllCourses] = useState([]);
  const [assignedCourses, setAssignedCourses] = useState([]);

  //function to assign courses to instructors
  const assignedCourse = async (coursename, instructor) =>{
    const res = await assignCourse({coursename, instructor}, token);
    setAssignedCourses([...assignedCourses, res.data.course]);
  }

  //function to add a course
  const addACourse = async (coursename, base64) =>{
    const res = await addCourse({coursename, base64}, token);
    setAllCourses([...allCourses, res.data.course]);
  } 

  //Rendering Courses on Change
  useEffect(() => {
    const getCourses = async () => {
      const coursesFromServer = await getAllCourses(token);
      console.log(coursesFromServer.data.courses);
      setAllCourses(coursesFromServer.data.courses);
    };
    const getAssignedCourses = async () => {
      const coursesFromServer = await getAllCourses(token, 'assigned');
      setAssignedCourses(coursesFromServer.data.courses);
    };
    getCourses(token);
    getAssignedCourses(token);
    
  },[]);

  //functions to show/hide Assign Course Popup 
  const showAssignPopup = (coursename) => {
    setShowAssignCourse(true);
      setCourseName(coursename);
  };
  const closeAssignPopup = () => {
    setShowAssignCourse(false);
  };

    //functions to show/hide Add Course Popup 
  const showAddPopup = () => {
    setShowAddCourse(true);
  };
  const closeAddPopup = () => {
    setShowAddCourse(false);
  };

  const [coursename, setCourseName] = useState("");
  const [image, setImage] = useState("../assets/download.jpeg")
  const [showAssignCourse, setShowAssignCourse] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);


  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Unassigned Courses</h1>
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
          return (
            <Course
            coursename = {course.name}
            image = {course.image}
            text = 'Assign'
            assigned = {false}
            onClick = {() => {
              showAssignPopup(course.name);
            }}
             />
          );
        })}

      </div>
      <h1 className = 'title'>Assigned Courses</h1>
      <div className = 'allcourses flex'>
        {  assignedCourses.map((course, index)  => {
          return (
            <Course
            coursename = {course.name}
            instructor = {course.instructor}
            image = {course.image}
            text = 'Assign'
            assigned = {true}
            onClick = {() => {
              showAssignPopup(course.name);
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
    onAdd = {assignedCourse}
    onClose = {() => {
      closeAssignPopup();
    }}
    />
    <AddCourse
    open = {showAddCourse}
    onAdd = {addACourse}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default AdminCourses;
