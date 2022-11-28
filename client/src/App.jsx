import CreateProduct from "./component/CreateProduct/CreateProduct";
import "./App.css";
import Register from "./page/NavbarPege/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./page/NavbarPege/Login"
import Reset from "./page/NavbarPege/Reset"
import CardDetailProduct from "./component/ProductDetail/CardDetailProduct"
import Home from "./component/Home/Home";
import Nav from './component/Navbar/Nav';
import SearchBar from './component/SearchBar/SearchBar';
import Recipes from './component/Recipes/Recipes'
import Products from './component/Products/Products';
<<<<<<< HEAD
import RecipeDetail from './component/RecipeDetail/RecipeDetail';
=======
import Footer from "./component/Footer/Footer";
import Contacto from "./component/Contacto/Contacto";
>>>>>>> 5159c7f59cdd54c3e0f6477a314cc54f2699e977





function App() {
  return (
    <div className="h-screen">
      <Nav />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        <Route path="/create" element={<CreateProduct/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/productDetail/:id" element={<CardDetailProduct/>} />
<<<<<<< HEAD
        <Route path="/recipeDetail/:id" element={<RecipeDetail/>} />

=======
        <Route path="contacto" element={ <Contacto/> }/>
>>>>>>> 5159c7f59cdd54c3e0f6477a314cc54f2699e977
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
