import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import HomePage from "./HomePage";
import MyBuilds from "./builds/MyBuilds";
<<<<<<< HEAD
import HddList from "./builds/PcPartsFetch";
=======
import MoboList from "./builds/MoboFetch";
import RamList from "./builds/RamFetch";
>>>>>>> 0703479203a00723e57243fd4c295957bb6a263c

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<HomePage />} />
          <Route path="mybuilds" element={<MyBuilds />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="parts" element={<HddList />} />
=======
          <Route path='/' element={<HomePage />} />
          <Route path='mybuilds' element={<MyBuilds />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='mobos' element={<MoboList />} />
          <Route path='rams' element={<RamList />} />
>>>>>>> 0703479203a00723e57243fd4c295957bb6a263c
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
