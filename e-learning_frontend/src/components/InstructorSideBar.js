import Navitem from "./Navitem";

const InstructorSideBar = () =>{
    return (
    <div className='sidebar flex column'>
      <Navitem
      text = {'Courses'}
      link = {"courses"}
      />
      <Navitem
      text = {'Assignments'}
      link ={'assignments'}
      />
      <Navitem
      text = {'Announcements'}
      link ={'announcements'}
      />

    </div>
  );

};

export default InstructorSideBar;
