import InstructorSideBar from "./InstructorSideBar";
import { Outlet } from "react-router-dom";

const Instructor = () =>{
    return (
      <div className="admin-page flex ">
      <InstructorSideBar />
      <Outlet />
      </div>
    );
};

export default Instructor;
