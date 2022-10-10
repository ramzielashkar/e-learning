import Button from './Button';
import AssignmentCard from './AssignmentCard';
import AddAssignment from './AddAssignment'
import { useState, useEffect } from "react";

const InstructorAssignments = () => {
  const showAddPopup = () => {
    setShowAddAssg(true);
  };
  const closeAddPopup = () => {
    setShowAddAssg(false);
  };

  const [showAddAssg, setShowAddAssg] = useState(false);

  return(
    <>
    <section className = 'section flex column'>
      <h1 className = 'title'>Assignments</h1>
      <div className='add-course-btn flex'>
        <Button
        text = {'Add Assignment'}
        color = {'btn-purple'}
        onClick = {() => {
          showAddPopup();
        }}
        />
      </div>
      <div className = 'all-students flex'>
      <AssignmentCard/>
      </div>
    </section>
    <AddAssignment
    open = {showAddAssg}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default InstructorAssignments;
