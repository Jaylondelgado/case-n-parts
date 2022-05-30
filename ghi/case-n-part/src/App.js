import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import SignIn from "./login/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="login" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
