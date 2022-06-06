import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./login/Login";
import Logout from "./login/Logout";
import SignUp from "./login/SignUp";
import HomePage from "./HomePage";
import MyBuilds from "./builds/MyBuilds";
import CreateBuild from "./builds/CreateBuild";
import HddList from "./builds/HddsFetch";
import MoboList from "./builds/MoboFetch";
import RamList from "./builds/RamFetch";
import PsuList from "./builds/PsuFetch";
import GpuList from "./builds/GpuFetch";
import CpuList from "./builds/CpuFetch";
import { useToken } from "./authApi";

function App() {
  const [token, login, logout, signup] = useToken();
  return (
    <BrowserRouter>
      <Nav token={token} />
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='mybuilds' element={<MyBuilds />} />
          <Route path='create' element={<CreateBuild />} />
          <Route path='login' element={<Login token={token} login={login} />} />
          <Route path='logout' element={<Logout logout={logout} />} />
          <Route
            path='signup'
            element={<SignUp token={token} signup={signup} />}
          />
          <Route path='hdds' element={<HddList />} />
          <Route path='mobos' element={<MoboList />} />
          <Route path='rams' element={<RamList />} />
          <Route path='psus' element={<PsuList />} />
          <Route path='gpus' element={<GpuList />} />
          <Route path='cpus' element={<CpuList />} />
        </Routes>
      </div>
      <div
        className='
      footer-container'
      >
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
