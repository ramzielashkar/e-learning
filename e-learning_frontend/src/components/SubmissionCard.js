import Button from './Button';

import { useState, useEffect } from "react";

const SubmissionCard = ({ text}) => {
  return (
    <>
    <div className = "submission-card flex column">
    <div className='submission'>Your Submission:</div>
      <div className='course-img'>
        <img src = {require('../assets/download.jpeg')} width = "100%" height = "100%"></img>
      </div>
      <div className='submission-info flex'>
        <div className='course-name'>Course:</div>
        <div className='course-name course-related'>Web Programming </div>
      </div>
      <div className='submission-info flex'>
        <div className='course-name'>Assignment:</div>
        <div className='course-related course-name'>Assignment 1</div>
      </div>


    </div>
    </>
  );
};

export default SubmissionCard;
