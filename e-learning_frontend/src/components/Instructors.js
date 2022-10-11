import Button from './Button';
import UserCard from './UserCard';
import { useState, useEffect } from "react";
import AddInstructor from './AddInstructor';
import { getInstructors } from '../Hooks/getInstructors';
import { addUser } from '../Hooks/AddUser';

const Instructors = () => {

  const token = localStorage.getItem('token');
  const [instructors, setInstructors] = useState([]);
  
  const addInstructor = async (name, email, password) =>{
    const type = 'instructor';
    const res  = await addUser( {name, email, password, type}, token);
    setInstructors([...instructors, res.data.user]);
  }
  
  useEffect(() => {
    const getAllInstructors = async (token) => {
      const instructorsFromServer = await getInstructors(token);
      console.log(instructorsFromServer.data);
      setInstructors(instructorsFromServer.data.users);
    };
    getAllInstructors(token);
  }, []);

  const showAddPopup = () => {
    setShowAddInstructor(true);
  };
  const closeAddPopup = () => {
    setShowAddInstructor(false);
  };

  const [showAddInstructor, setShowAddInstructor] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Instructors</h1>
      <div className='add-course-btn flex'>
        <Button
        text = {'Add Instructor'}
        color = {'btn-purple'}
        onClick = {() => {
          showAddPopup();
        }}
        />
      </div>
      <div className = 'all-students flex'>
      {  instructors.map((instructor, index)  => {
        return(
          <UserCard
          name={instructor.name}
          email={instructor.email}
          />
        );
      })}
      </div>
    </section>
    <AddInstructor
    open = {showAddInstructor}
    onAdd = {addInstructor}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default Instructors;
