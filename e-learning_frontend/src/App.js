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
import Student from "./components/Student";
import StudentCourses from "./components/StudentCourses";
import Submissions from "./components/Submissions";
import { useState, useEffect } from "react";
import {login} from './Hooks/login';


// Didn't Have Time to Organize My Folders (Components and Pages)


const add = () => {
  console.log();
};

function App() {
  const [user, setUser] = useState('');
  const showLogin = async (user) => {
    const res = await login(user);
    setUser(res.data.user.name);
    localStorage.setItem('token',res.data.user.token);
    const type = res.data.user.type;
    return type;
  
  }
  return (
    <BrowserRouter>
    <Header 
      name = {user}
    />
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

    <Route path="/student" element={
      <Student />
    } >
      <Route path = 'studentcourses' element={
        <StudentCourses />
      } />
      <Route path = 'assignments' element={
        <InstructorAssignments />
      } />
      <Route path = 'submissions' element={
        <Submissions />
      } />
    </Route>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
