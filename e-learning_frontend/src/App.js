import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={
      <div>

      </div>
    } />
    <Route path="/admin" element={
      <div>
        <Sidebar />
      </div>
    } />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
