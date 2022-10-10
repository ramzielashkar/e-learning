import Navitem from "./Navitem";

const Sidebar = () =>{
    return (
    <div className='sidebar flex column'>
      <Navitem
      text = {'Courses'}
      link = {"studentcourses"}
      />
      <Navitem
      text = {'Submissions'}
      link ={'submissions'}
      />

    </div>
  );

};

export default Sidebar;
