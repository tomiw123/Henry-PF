import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import "./filter.css"
import { getAllFilters, geTAllProducts} from "../../redux/actions/actions";

const Filter = () => {
 
const dispatch = useDispatch();

  const handleOrders = (e) => {
    if (e.target.value === "todo") {
      dispatch(geTAllProducts(1));
    }
    if (e.target.value === "asc") {
      dispatch(getAllFilters("alfa",1,1));
    }
    if (e.target.value === "dsc") {
      dispatch(getAllFilters("alfa",-1,1));
    }
     if (e.target.value === "precioMenor") {
      dispatch(getAllFilters("price",1,1));
    }
     if (e.target.value === "precioMayor") {
      dispatch(getAllFilters("price",-1,1));
    }
  };

  const handleFilterCategory = (e) => {
    if (e.target.value === "todo") {
      dispatch(geTAllProducts(1));
    }
    if (e.target.value === "parrillas") {
      dispatch(getAllFilters("category", "parrillas",1));
    }
    if (e.target.value === "fogoneros") {
      dispatch(getAllFilters("category", "fogoneros",1));
    }
     if (e.target.value === "accesorios") {
      dispatch(getAllFilters("category", "accesorios",1));
    }
    if (e.target.value === "articulos") {
      dispatch(getAllFilters("category", "articulos",1));
    }
  };
  return (
    <>
    <div className="filtrado">
      <div>
        <label>Ordenar por</label>
        <select className="selector" defaultValue="todo" onChange={(e) => handleOrders(e)}>
          <option value="todo">Sin orden...</option>
          <option value="asc">Nombre A-Z</option>
          <option value="dsc">Nombre Z-A</option>
          <option value="precioMenor">Precio Min/max</option>
          <option value="precioMayor">Precio Max/Min</option>
        </select>
      </div>
      <div >
        <label>Categorias</label>
        
        <select className="selector" onChange={(e) => handleFilterCategory(e)}>
          <option value="todo">Todos</option>
          <option value="parrillas">Parrillas</option>
          <option value="fogoneros">Fogoneros</option>
          <option value="accesorios">Accesorios</option>
          <option value="articulos">Articulos varios</option>
        </select>
      </div>
      </div>
    </>
  ); 
  }
export default Filter;