import Button from './Button';
import AssignCourses from './AssignCourses';

import { useState, useEffect } from "react";

const Course = ({onClick, text, coursename, image, assigned}) => {
  return (
    <>
    <div className = "course-card flex column">
      <div className='course-img'>
        <img src ={`http://127.0.0.1:8000/${image}`} width = "100%" height = "100%"></img>
      </div>
      <div className='course-name'>{coursename}</div>
      <div className='assign-course flex'>
        { !assigned? 
        <Button
        text= {text}
        color={'btn-purple'}
        onClick = {onClick}/>
       : 
       <div className='course-name'>Instructor</div> }
      </div>
    </div>
    </>
  );
};

export default Course;
