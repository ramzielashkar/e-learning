import Button from './Button';
import { getCourses } from '../Hooks/getInstructorCourses';
import { useState, useEffect } from 'react';

const AddAnnouncement = ({open, text, coursename, onClose, onAdd}) => {
  const token = localStorage.getItem('token');
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState('');
  const [announcement, setAnnouncement] = useState('');

  //function to add Asnnouncement
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!course) {
    console.log('error');
    return;
    } 
    onAdd(course, announcement);
    onClose();
} 

  //fetching Instructor courses
  useEffect(() => {
    const getInstructorCourses = async (token) => {
      const coursesFromServer = await getCourses(token);
      setCourses(coursesFromServer.data.courses);
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
          <label>Announcement </label>
          <textarea className='assg-details' placeholder="Enter Announcement" rows="10" onChange={(e) => {
          setAnnouncement(e.target.value)}}></textarea>
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
        <input type={"submit"} value="Add" className="btn btn-assign" />
        </div>
      </form>
    </div>
  );
};
export default AddAnnouncement;
