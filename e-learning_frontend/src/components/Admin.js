import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const Admin = () =>{
    return (
      <div className="admin-page flex ">
      <AdminSidebar />
      <Outlet />
      </div>
    );
};

export default Admin;
