import Button from './Button';
import AssignmentCard from './AssignmentCard';
import AddAssignment from './AddAssignment'
import { useState, useEffect } from "react";
import { getAssignments } from '../Hooks/getInstructorAssignments';
import { addAssignment } from '../Hooks/AddAssignment';

const InstructorAssignments = () => {
  const showAddPopup = () => {
    setShowAddAssg(true);
  };
  const closeAddPopup = () => {
    setShowAddAssg(false);
  };

  const [assignment, setAssignments] = useState([]);
  const [showAddAssg, setShowAddAssg] = useState(false);
  const token = localStorage.getItem('token');

  const addAssg = async (coursename, assignment_name, assignment_details) =>{
    const res = await addAssignment({coursename, assignment_details, assignment_name}, token);
  }

   //function to fetch get Assignments API
   useEffect(() => {
    const getInstructorAssg = async () => {
      const assignmentsFromServer = await getAssignments(token);
      console.log(assignmentsFromServer.data.assignments);
      setAssignments(assignmentsFromServer.data.assignments);
    };
    getInstructorAssg(token);
    
  },[]);

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
      {  assignment.map((course, index)  => {
            let assignments = course.assignments; 
              return (
                <>
                {course.assignments.map((assg, key)  => {
                  return(
                <AssignmentCard
                course={course.name}
                name = {assg.assignment_name}
                details = {assg.assignment_details}
                />
                  );
              })}
            </>
              );
  })}
        
      </div>
    </section>
    <AddAssignment
    onAdd = {addAssg}
    open = {showAddAssg}
    onClose = {() => {
      closeAddPopup();
    }}
    />
    </>
  );
};
export default InstructorAssignments;
