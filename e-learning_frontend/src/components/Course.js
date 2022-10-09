import Button from './Button';
import AssignCourses from './AssignCourses';

import { useState, useEffect } from "react";

const Course = ({onClick}) => {
  return (
    <>
    <div className = "course-card flex column">
      <div className='course-img'>
        <img src = {require('../assets/download.jpeg')} width = "100%" height = "100%"></img>
      </div>
      <div className='course-name'>Web</div>
      <div className='assign-course flex'>
        <Button
        text= {'Assign'}
        color={'btn-purple'}
        onClick = {onClick}/>
      </div>
    </div>
    </>
  );
};

export default Course;
