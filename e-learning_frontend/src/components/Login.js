import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Login component
const Login = ({onAdd}) =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // function to submit the form
  const onSubmit = (e) => {
  e.preventDefault();
  if (!email) {
    console.log('error');
    return;
  }
  onAdd({ email, password });
  setAuthenticated(true);
  setEmail("");
  setPassword("");
};

if(authenticated){
  navigate('/instructor ');
}

  return(
    <section className = 'login-section flex column'>
      <form className = "login-form flex column" onSubmit={onSubmit}>
        <h2>Start a New Journey !</h2>
        <div className="form-control flex column">
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
        <input type={"submit"} value="Login" className="btn btn-purple" />
    </form>
    </section>
  );

};
export default Login;
