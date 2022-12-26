import CreateProduct from "./component/CreateProduct/CreateProduct";
import EditProduct from "./component/EditProduct/EditProduct"
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
import Footer from "./component/Footer/Footer";
import Contacto from "./component/Contacto/Contacto";
import CreateRecipe from './component/CreateRecipe/CreateRecipe';
import HomeAdmin from './component/Admin/HomeAdmin'
import TotalAdmin from "./component/Admin/SetAdmin/TotalAdmin"
import AdminProducts from './component/Admin/AdminProducts/AdminProducts'
import AdminRecipes from './component/Admin/AdminRecipes/AdminRecipes'
import EditRecipe from "./component/EditRecipe/EditRecipe";
import CartForm from "./component/CartForm/CartForm";
import ControlDeVentas from "./component/Admin/AdminControl/AdminContronVentas";
import Reviews from "./component/Reviews/Reviews";
import Felicidades from "./component/Felicidades/Felicidades";

function App() {
  return (
    <div className="h-screen">
      <Nav />
      <SearchBar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/HAdmin" element={<HomeAdmin/>} />
        <Route path="/HAdmin/AdminProducts" element={<AdminProducts/>} />
        <Route path="/HAdmin/AdminRecipes" element={<AdminRecipes/>} />
        <Route path="/getAdmin" element={<TotalAdmin/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        <Route path="/create" element={<CreateProduct/>} />
        <Route path="/edit/:id" element={<EditProduct/>} />
        <Route path="/editRecipe/:id" element={<EditRecipe/>} />
        <Route path="/createRecipe" element={<CreateRecipe/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/productDetail/:id" element={<CardDetailProduct/>} />
        <Route path="/recipeDetail/:id" element={<RecipeDetail/>} />
        <Route path="/contacto" element={ <Contacto/> }/>
        <Route path="/cartform" element={ <CartForm/> }/>
        <Route path="/controlDeVentas" element={<ControlDeVentas/>} />
        <Route path="/reviews/:id" element={<Reviews/>} />
        <Route path="/felicidades" element={<Felicidades/>} />

        

        </Routes>
        
      <Footer/>
      </div>
  );
}

export default App;
