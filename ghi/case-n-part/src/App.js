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
import BuildList from "./builds/FetchBuilds";
import { useToken } from "./authApi";

import "./App.css";

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
          <Route path='builds' element={<BuildList />} />
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
