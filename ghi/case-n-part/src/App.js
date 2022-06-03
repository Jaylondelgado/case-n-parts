import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import HomePage from "./HomePage";
import MyBuilds from "./builds/MyBuilds";
import HddList from "./builds/HddsFetch";
import MoboList from "./builds/MoboFetch";
import RamList from "./builds/RamFetch";
import PsuList from "./builds/PsuFetch";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="mybuilds" element={<MyBuilds />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="hdds" element={<HddList />} />
          <Route path="mobos" element={<MoboList />} />
          <Route path="rams" element={<RamList />} />
          <Route path="psus" element={<PsuList />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
