import { useState, useEffect } from 'react';
import Button from './Button';
import { getCourses } from '../Hooks/getInstructorCourses';

const AddAssignment = ({open, text, coursename, onClose, onAdd}) => {
  const [course, setCourse] = useState('');
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  //function to add Assignment
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!course) {
    console.log('error');
    return;
    } 
    onAdd(course, name, details);
    onClose();
} 
  const token = localStorage.getItem('token');
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const getInstructorCourses = async (token) => {
      const coursesFromServer = await getCourses(token);
      setCourses(coursesFromServer.data.courses);
      //console.log(coursesFromServer.data.courses['0'].name);
      setCourse(coursesFromServer.data.courses['0'].name);
    };
    getInstructorCourses(token);
  }, []);
  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <form className='assign-popup flex column' onSubmit={onSubmit}>
        <div className='course-info flex column'>
          <label>Assignment Name</label>
          <input type = 'text' onChange={(e) => {
          setName(e.target.value)}}></input>
        </div>
        <div className='course-info flex column'>
          <label>Assignment Description</label>
          <textarea className='assg-details' placeholder="Enter Assignment Details" rows="10" onChange={(e) => {
          setDetails(e.target.value)}}></textarea>
        </div>
        <div className = 'instructor-info flex column'>
        <label>Course</label>
        <select name="course" value='' onChange={(e) => {
          setCourse(e.target.value)}}>
            {courses.map((course, index) =>{
            return(
              <option value={course.name}>{course.name}</option>
            );
          })};
        </select>

        </div>
        <div className='buttons flex'>
        <Button
        text= {'Close'}
        color={'btn-assign'}
        onClick = {onClose}/>
        <input type={"submit"} value="Assign" className="btn btn-assign" />
        </div>
      </form>
    </div>
  );
};
export default AddAssignment;
