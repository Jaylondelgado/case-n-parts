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
>>>>>>> 7628fbd4f959e168e9e0ae09c5456f2282ac4ba1

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='container'>
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
>>>>>>> 7628fbd4f959e168e9e0ae09c5456f2282ac4ba1
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
