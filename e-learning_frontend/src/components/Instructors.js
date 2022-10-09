import Button from './Button';
import UserCard from './UserCard';
import { useState, useEffect } from "react";
import AddInstructor from './AddInstructor';

const Instructors = () => {
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
      <UserCard/>
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
