import Button from './Button';

const AddAnnouncement = ({open, text, coursename, onClose}) => {
  if(!open){
    return null;
  }
  
  return(
    <div className='assign-container flex column'>
      <form className='assign-popup flex column'>
        <div className='course-info flex column'>
          <label>Announcement </label>
          <textarea className='assg-details' placeholder="Enter Announcement" rows="10"></textarea>
        </div>
        <div className = 'instructor-info flex column'>
        <label>Course</label>
        <select name="course">
          <option value="1">Web Programming</option>
          <option value="2">Mobile App</option>
          <option value="3">Intro</option>
        </select>

        </div>
        <div className='buttons flex'>
        <Button
        text= {'Close'}
        color={'btn-assign'}
        onClick = {onClose}/>
        <input type={"submit"} value="Add" className="btn btn-assign" />
        </div>
      </form>
    </div>
  );
};
export default AddAnnouncement;
