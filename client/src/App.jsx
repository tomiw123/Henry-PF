import CreateProduct from './component/CreateProduct/CreateProduct'
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
import RecipeDetail from './component/RecipeDetail/RecipeDetail';





function App() {
  return (
    <div className="h-screen">
      <Nav/>
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
        <Route path="/recipeDetail/:id" element={<RecipeDetail/>} />

      </Routes>
    </div>
  );
}

export default App;
