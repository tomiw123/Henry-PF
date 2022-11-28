import CreateProduct from "./component/CreateProduct/CreateProduct";
import "./App.css";
import Register from "./page/NavbarPege/Register";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Login from "./page/NavbarPege/Login";
import Reset from "./page/NavbarPege/Reset";

import Home from "./component/Home/Home";
import Nav from "./component/Navbar/Nav";
import SearchBar from "./component/SearchBar/SearchBar";
//import Carrousel from './component/Carrousel/Carrousel';

=======
import Login from "./page/NavbarPege/Login"
import Reset from "./page/NavbarPege/Reset"
import CardProduct from "./component/CardProduct/CardProduct"
import Home from "./component/Home/Home";
import Nav from './component/Navbar/Nav';
import SearchBar from './component/SearchBar/SearchBar';
import Recipes from './component/Recipes/Recipes'
//import Carrousel from './component/Carrousel/Carrousel';






>>>>>>> abdd381faba4174de7c58da378c6f1ba7b772ed9
function App() {
  return (
    <div className="h-screen">
      <Nav />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
<<<<<<< HEAD
        <Route path="reset" element={<Reset />} />
        <Route path="/create" element={<CreateProduct />} />
=======
          <Route path="reset" element={<Reset />} />
        <Route path="/create" element={<CreateProduct/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/product" element={<CardProduct/>} />

>>>>>>> abdd381faba4174de7c58da378c6f1ba7b772ed9
      </Routes>
    </div>
  );
}

export default App;
