import Button from './Button';
import { useState, useEffect } from "react";

const AddInstructor = ({open, onClose, onAdd}) => {
  const [instructorName, setInstructorName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
  e.preventDefault();
  if (!email) {
    console.log('error');
    return;
  }
  onAdd(instructorName, email, password);
  setInstructorName("");
  setEmail("");
  setPassword("");
  onClose();
};

  if(!open){
    return null;
  }

  return(
    <div className='assign-container flex column'>
      <div className='assign-popup flex column'>
          <div>
          <div className='course-image'>
            <img src={require('../assets/default.png')} alt="" width='100%' height="100%" />
          </div>
        </div>

        <form className = "login-form flex column" onSubmit={onSubmit}>
          <div className="form-control flex column">
          <div className="form-control flex column">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setInstructorName(e.target.value)}
              />
            </div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>

          <div className="form-control flex column">
            <label>Password</label>
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          <input type={"submit"} value="Add Instructor" className="btn btn-purple" />
      </form>
        <div className='buttons flex'>
        <Button
        text= {'Close'}
        color={'btn-assign'}
        onClick = {onClose}/>

        </div>
      </div>
    </div>
  );
};
export default AddInstructor;
