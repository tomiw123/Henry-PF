import CreateProduct from './component/CreateProduct/CreateProduct'
import "./App.css";
import Register from "./page/NavbarPege/Register";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/create" element={<CreateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
