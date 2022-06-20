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
import BuildList from "./builds/BuildList";
import { useToken } from "./authApi";
import DetailBuild from "./builds/DetailBuild";
import UpdateBuild from "./builds/UpdateBuild";

import "./App.css";

function App() {
  const [token, login, logout, signup] = useToken();

  return (
    <BrowserRouter>
      <Nav token={token} />
      <div className='container-fluid p-0'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='builds/'>
            <Route path='create' element={<CreateBuild />} />
            <Route path='mybuilds' element={<MyBuilds />} />
            <Route path='viewbuilds' element={<BuildList />} />
            <Route
              path='detailbuild/:id'
              element={<DetailBuild token={token} />}
            />
            <Route path='updatebuild/:id' element={<UpdateBuild />} />
          </Route>
          <Route path='login' element={<Login token={token} login={login} />} />
          <Route path='logout' element={<Logout logout={logout} />} />
          <Route
            path='signup'
            element={<SignUp token={token} signup={signup} />}
          />
        </Routes>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
