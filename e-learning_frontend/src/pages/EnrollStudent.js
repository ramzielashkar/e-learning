import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { getStudents } from '../Hooks/getStudents';

const EnrollStudent = ({open, text, coursename, onClose, onAdd}) => {
  const [student, setStudent] = useState('');

  //function to submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    onAdd(student, coursename);
    onClose();
} 
  const token = localStorage.getItem('token');
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const getAllStudents = async (token) => {
      const studentsFromServer = await getStudents(token);
      console.log(studentsFromServer);
      setStudents(studentsFromServer.data.users);
      setStudent(studentsFromServer.data.users['0'].name);

    };
    getAllStudents(token);
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
        <select name="student" value ={student} onChange={(e) => {
          setStudent(e.target.value)}}>
          {students.map((student, index) =>{
            return(
              <option value={student.name}>{student.name}</option>
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
export default EnrollStudent;
