import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoes">
            <Route index element={<ShoeList shoes={props.shoes} />} />
            <Route path='new' element={<ShoeForm />} />
          </Route>
          <Route path="hats">
            <Route index element={<HatsList hats={props.hats}/>} />
            <Route path="new" element={<CreateHatForm />} />
          </Route>
        </Routes>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
