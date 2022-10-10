import Button from './Button';
import SubmissionCard from './SubmissionCard';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Submissions = () =>{
  const navigate = useNavigate();
  const [coursename, setCourseName] = useState("Web");
  const [student, setStudent] = useState("Ramzi");
  const [showAssignCourse, setShowAssignCourse] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Submissions</h1>
      <div className = 'allcourses flex'>
        <SubmissionCard/>
      </div>
    </section>
    </>
  );
};
export default Submissions;
