import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import HomePage from "./HomePage";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
