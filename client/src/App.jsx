import "./App.css";
import Register from "./page/NavbarPege/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import NavBar from "./page/NavbarPege/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
