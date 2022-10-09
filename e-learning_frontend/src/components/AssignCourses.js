import Button from './Button';

const AssignCourses = ({open, image, coursename, onClose}) => {
  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <div className='assign-popup flex column'>
        <div className='course-info flex column'>
          <label>Course Name</label>
          <input value={coursename}></input>
        </div>
        <div className = 'instructor-info flex column'>
        <label>Instructor</label>
        <select name="instructor">
          <option value="1">Ramzi</option>
          <option value="2">Karam</option>
          <option value="3">Marwan</option>
        </select>
        </div>
        <div className='buttons flex'>
        <Button
        text= {'Close'}
        color={'btn-assign'}
        onClick = {onClose}/>
        <Button
        text= {'Assign'}
        color={'btn-assign'}
        onClick = {onClose}/>
        </div>
      </div>
    </div>
  );
};
export default AssignCourses;
