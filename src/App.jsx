import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Container/Home";
import Appoimentlist from "./components/Appoimentlist/Appoimentlist";
import Login from "./components/Login/Login";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLogin);

  return (
   
      <>
        {isLoggedIn ? (
          <>
            <div className="page-wrapper">
              <Header />
            </div>
            <Sidebar />
            <div className="page-body"> 
            <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/patients-appointment" element={<Appoimentlist />} />
        </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )}
      </>
   
  );
}

export default App;
