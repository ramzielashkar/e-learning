import { FaBook } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import Navitem from "./Navitem";

const Sidebar = () =>{
    return (
    <div className='sidebar flex column'>
      <Navitem
      text = {'Courses'}
      />
      <Navitem
      text = {'Students'}
      />
      <Navitem
      text = {'Instructors'}
      />

    </div>
  );

};

export default Sidebar;
