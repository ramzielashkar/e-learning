import Button from './Button';

const StudentCard = (onClick) => {
  return(
    <>
    <div className = "course-card flex column">
      <div className='course-img'>
        <img src = {require('../assets/images.jpeg')} width = "100%" height = "100%"></img>
      </div>
      <div className='student-info'>Ramzi</div>
      <div className='student-info'>Email</div>
    </div>
    </>
  );
};
export default StudentCard;
