import Button from './Button';
import UserCard from './UserCard';
import { useState, useEffect } from "react";
import AddStudent from './AddStudent';
import { getAllStudents } from '../Hooks/getAllStudents';
import { addUser } from '../Hooks/AddUser';
const Students = () => {

  const token = localStorage.getItem('token');
  const [students, setStudents] = useState([]);

  //function to add a student
  const addStudent = async (name, email, password) =>{
    const type = 'student';
    const res  = await addUser( {name, email, password, type}, token);
    setStudents([...students, res.data.user]);
  }

  //Rendering Students on Change
  useEffect(() => {
    const getStudents = async (token) => {
      const studentsFromServer = await getAllStudents(token);
      setStudents(studentsFromServer.data.users);
    };
    getStudents(token);
  }, []);

  //functions to show/hide add student popup
  const showAddPopup = () => {
    setShowAddStudent(true);
  };
  const closeAddPopup = () => {
    setShowAddStudent(false);
  };

  const [showAddStudent, setShowAddStudent] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Students</h1>
      <div className='add-course-btn flex'>
        <Button
        text = {'Add Student'}
        color = {'btn-purple'}
        onClick = {() => {
          showAddPopup();
        }}
        />
      </div>
      <div className = 'all-students flex'>
      {  students.map((student, index)  => {
        return(
          <UserCard
          name={student.name}
          email={student.email}
          />
        );
      })}
     
      </div>
    </section>
    <AddStudent
    onAdd = {addStudent}
    open = {showAddStudent}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default Students;
