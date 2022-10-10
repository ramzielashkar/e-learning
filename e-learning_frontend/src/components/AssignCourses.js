import Button from './Button';

const AssignCourses = ({open, text, coursename, onClose}) => {
  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <form className='assign-popup flex column'>
        <div className='course-info flex column'>
          <label>Course Name</label>
          <input value={coursename}></input>
        </div>
        <div className = 'instructor-info flex column'>
        <label>{text}</label>
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
        <input type={"submit"} value="Assign" className="btn btn-assign" />
        </div>
      </form>
    </div>
  );
};
export default AssignCourses;
