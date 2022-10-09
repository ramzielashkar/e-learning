import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AdminSidebar from "./components/AdminSidebar";
import Login from "./components/Login";
import Admin from "./components/Admin";
import AdminCourses from "./components/AdminCourses";
import Students from "./components/Students";
import Instructors from "./components/Instructors";


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


    </Routes>
    </BrowserRouter>
  );
}

export default App;
