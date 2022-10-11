
const AssignmentCard = ({name, course, details}) => {
  return(
    <div className='assignment-card flex column'>
      <div className='assignment-info'>
        <div className='assignment'>Assignment Name</div>
        <div>{name}</div>
      </div>
      <div className='assignment-info '>
        <div className='assignment'>Desription</div>
        <div>{details}</div>
      </div>
      <div className='assignment-info '>
        <div className='assignment'>Course</div>
        <div> {course}</div>
      </div>
    </div>
  );
};
export default AssignmentCard;
