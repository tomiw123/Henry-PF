import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import "./filter.css"
import { getAllFilters, geTAllProducts} from "../../redux/actions/actions";

const Filter = () => {
 
const dispatch = useDispatch();

/*   useEffect(() => {
    dispatch(getAllFilters())
}, [dispatch]); */
  //
  const handleOrders = (e) => {
    /* if (e.target.value === "todo") {
      dispatch(getAllFilters(1));
    } */
    if (e.target.value === "asc") {
      dispatch(getAllFilters("alfa",1));
    }
    if (e.target.value === "dsc") {
      dispatch(getAllFilters("alfa",-1));
    }
     if (e.target.value === "precioMenor") {
      dispatch(getAllFilters("price",1));
    }
     if (e.target.value === "precioMayor") {
      dispatch(getAllFilters("price",-1));
    }
  };

  const handleFilterCategory = (e) => {
    /* if (e.target.value === "todo") {
      dispatch(geTAllProducts());
    } */
    if (e.target.value === "parrillas") {
      dispatch(getAllFilters("category", "parrillas"));
    }
    if (e.target.value === "fogoneros") {
      dispatch(getAllFilters("category", "fogoneros"));
    }
     if (e.target.value === "accesorios") {
      dispatch(getAllFilters("category", "accesorios"));
    }
    if (e.target.value === "articulos") {
      dispatch(getAllFilters("category", "articulos"));
    }
  };
  return (
    <>
    <div className="filtrado">
      <div>
        Ordenar por:
        <select className="selector" defaultValue="todo" onChange={(e) => handleOrders(e)}>
          <option value="todo">Ordenar por...</option>
          <option value="asc">Nombre A-Z</option>
          <option value="dsc">Nombre Z-A</option>
          <option value="precioMenor">Precio Min/max</option>
          <option value="precioMayor">Precio Max/Min</option>
        </select>
      </div>
      <div >
        Categorias:
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