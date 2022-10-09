import { FaBook } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Navitem = ({text, link}) =>{
  return (
    <Link to = {link} className='link'>
      <div className='nav-item flex'>
        <p>{text}</p>
      </div>
      </Link>
    );
};

export default Navitem;
