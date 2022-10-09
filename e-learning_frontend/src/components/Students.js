import Button from './Button';
import UserCard from './UserCard';
import { useState, useEffect } from "react";
import AddStudent from './AddStudent';

const Students = () => {
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
      <UserCard/>
      </div>
    </section>
    <AddStudent
    open = {showAddStudent}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default Students;
