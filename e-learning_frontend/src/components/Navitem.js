import { FaBook } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Navitem = ({text}) =>{
  return (
    <Link to = {"allcourses"} className='link'>
      <div className='nav-item flex'>
        <p>{text}</p>
      </div>
      </Link>
    );
};

export default Navitem;
