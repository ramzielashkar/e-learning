import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AdminSidebar from "./components/AdminSidebar";
import Login from "./components/Login";
import Admin from "./components/Admin";
import AdminCourses from "./components/AdminCourses";
import Students from "./components/Students";
import Instructors from "./components/Instructors";
import Instructor from "./components/Instructor";
import InstructorCourses from "./components/InstructorCourses";
import InstructorAssignments from "./components/InstructorAssignments";
import InstructorAnnouncements from "./components/InstructorAnnouncements";
const showLogin = (user) => {
  console.log('email', user.email);
  console.log('password', user.password);

}
const add = () => {
  console.log();
};

function App() {
  return (
    <BrowserRouter>
    <Header /
    >
    <Routes>
    <Route path="/" element={
      <div>
        <Login onAdd={showLogin}/>
      </div>
    } />

    <Route path="/admin" element={
      <Admin />
    } >
      <Route path = 'allcourses' element={
        <AdminCourses />
      } />
      <Route path = 'students' element={
        <Students />
      } />
      <Route path = 'instructors' element={
        <Instructors />
      } />
    </Route>

    <Route path="/instructor" element={
      <Instructor />
    } >
      <Route path = 'courses' element={
        <InstructorCourses />
      } />
      <Route path = 'assignments' element={
        <InstructorAssignments />
      } />
      <Route path = 'announcements' element={
        <InstructorAnnouncements />
      } />
    </Route>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
