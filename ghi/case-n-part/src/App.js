import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import signIn from "./login/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="login" />
          <Route index element={<signIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
