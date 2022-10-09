import Button from './Button'

const Course = () => {
  return (
    <div className = "course-card flex column">
      <div className='course-img'>
        <img src = {require('../assets/download.jpeg')} width = "100%" height = "100%"></img>
      </div>
      <div className='course-name'>Web</div>
      <p>Instructor</p>
      <div className='assign-course flex'>
        <Button
        text= {'Assign'}/>
      </div>
    </div>
  );
};

export default Course;
