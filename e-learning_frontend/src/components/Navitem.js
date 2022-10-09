import { FaBook } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';

const Navitem = ({text}) =>{
  return (
      <div className='nav-item flex'>
        <p>{text}</p>
      </div>
    );
};

export default Navitem;
