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
import MoboList from "./parts/MoboFetch";
import RamList from "./parts/RamFetch";
import PsuList from "./parts/PsuFetch";
import GpuTable from "./parts/GpuTable";
import CpuList from "./parts/CpuFetch";
import BuildList from "./builds/FetchBuilds";
import { useToken } from "./authApi";
// import ViewBuilds from "./builds/ViewBuilds";

import "./App.css";
import HddTable from "./parts/HddTable";

function App() {
  const [token, login, logout, signup] = useToken();
  return (
    <BrowserRouter>
      <Nav token={token} />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="mybuilds" element={<MyBuilds />} />
          <Route path="create" element={<CreateBuild />} />
          <Route path="login" element={<Login token={token} login={login} />} />
          <Route path="logout" element={<Logout logout={logout} />} />
          <Route
            path="signup"
            element={<SignUp token={token} signup={signup} />}
          />
          <Route path="hdds" element={<HddTable />} />
          <Route path="mobos" element={<MoboList />} />
          <Route path="rams" element={<RamList />} />
          <Route path="psus" element={<PsuList />} />
          <Route path="gpus" element={<GpuTable />} />
          <Route path="cpus" element={<CpuList />} />
          <Route path="builds" element={<BuildList />} />
          {/* <Route path='viewbuilds' element={<ViewBuilds />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
