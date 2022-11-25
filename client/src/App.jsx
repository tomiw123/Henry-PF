import CreateProduct from './component/CreateProduct/CreateProduct'
import "./App.css";
import Register from "./page/NavbarPege/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./page/NavbarPege/Login"
import Reset from "./page/NavbarPege/Reset"

import Home from "./component/Home/Home";
import Nav from './component/Navbar/Nav';
import Footer from "./component/Footer/Footer"
import SearchBar from './component/SearchBar/SearchBar';





function App() {
  return (
    <div className="h-screen">
      <Nav/>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="login" element={<Login />} />
          <Route path="reset" element={<Reset />} />
        <Route path="/create" element={<CreateProduct/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
