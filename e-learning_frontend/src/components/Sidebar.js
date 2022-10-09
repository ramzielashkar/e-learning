import { FaBook } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';

const Sidebar = () =>{
  return (
    <div className='sidebar flex column'>
      <div className='nav-item flex'>
        <FaBook className='icon' />
        <p>Courses</p>
      </div>
      <div className='nav-item flex'>
      <FaUserGraduate className='icon' />
      <p>Students</p>
      </div>
      <div className='nav-item flex'>
      <FaUserTie className='icon' />
      <p>Instructors</p>
      </div>

    </div>
  );

};
export default Sidebar;
