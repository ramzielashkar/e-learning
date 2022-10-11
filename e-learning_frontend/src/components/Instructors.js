import Button from './Button';
import UserCard from './UserCard';
import { useState, useEffect } from "react";
import AddInstructor from './AddInstructor';
import { getInstructors } from '../Hooks/getInstructors';

const Instructors = () => {

  const token = localStorage.getItem('token');
  const [instructors, setInstructors] = useState([]);
  
  useEffect(() => {
    const getAllInstructors = async (token) => {
      const instructorsFromServer = await getInstructors(token);
      console.log(instructorsFromServer.data);
      setInstructors(instructorsFromServer.data.users);
      console.log(instructors);
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
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default Instructors;
