import StudentSideBar from "./StudentSideBar";
import { Outlet } from "react-router-dom";

const Student = () =>{
    return (
      <div className="admin-page flex ">
      <StudentSideBar />
      <Outlet />
      </div>
    );
};

export default Student;
