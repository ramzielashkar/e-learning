import Button from './Button';
import { getInstructors } from '../Hooks/getInstructors';
import { useState, useEffect } from 'react';
import { assignCourse } from '../Hooks/AssignCourses';


const AssignCourses = ({open, text, coursename, onClose, onAdd}) => {
  //const [course, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    onAdd(coursename, instructor);
    onClose();
} 
  const token = localStorage.getItem('token');
  const [instructors, setInstructors] = useState([]);
  
  useEffect(() => {
    const getAllInstructors = async (token) => {
      const instructorsFromServer = await getInstructors(token);
      setInstructors(instructorsFromServer.data.users);
    };
    getAllInstructors(token);
  }, []);

  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <form className='assign-popup flex column' onSubmit={onSubmit}>
        <div className='course-info flex column'>
          <label>Course Name</label>
          <input value={coursename}></input>
        </div>
        <div className = 'instructor-info flex column'>
        <label>{text}</label>
        <select name="instructor" value ={instructor} onChange={(e) => {
          setInstructor(e.target.value)}}>
          {instructors.map((instructor, index) =>{
            return(
              <option value={instructor.name}>{instructor.name}</option>
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
export default AssignCourses;
