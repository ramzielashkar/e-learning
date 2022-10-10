import Course from './Course';
import Button from './Button';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentCourses = () =>{
  const navigate = useNavigate();
  const [coursename, setCourseName] = useState("Web");
  const [student, setStudent] = useState("Ramzi");
  const [showAssignCourse, setShowAssignCourse] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Courses</h1>
      <div className = 'allcourses flex'>
        <Course
          text = {"View Assignments"}
          onClick ={() => {
            navigate('/student/assignments');
          }}
        />
      </div>
    </section>
    </>
  );
};
export default StudentCourses;
