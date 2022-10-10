
const AssignmentCard = () => {
  return(
    <div className='assignment-card flex column'>
      <div className='assignment-info'>
        <div className='assignment'>Assignment Name</div>
        <div> Assignment 1</div>
      </div>
      <div className='assignment-info '>
        <div className='assignment'>Desription</div>
        <div>Create a web app</div>
      </div>
      <div className='assignment-info '>
        <div className='assignment'>Course</div>
        <div> Web Programming</div>
      </div>
    </div>
  );
};
export default AssignmentCard;
