import React, { useState, useEffect } from "react";
import style from "./Products.module.css";
import Card from "./CardProducts/Card";
import { useDispatch, useSelector } from "react-redux";
import { geTAllProducts} from "../../redux/actions/actions";
import Paginado from "../Paginado/Paginado";
import BusquedaProducts from "../BarraDeBusqueda/BusquedaProducts";
import Filter from "../Filtros/Filter";
// import { useTransition } from "react";

export default function Products(props) {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.products.docs);
  const product = useSelector((state) => state.products);
  //console.log(product);
  // const products = useSelector((state) => state.products.docs);
  useEffect(() => {
      dispatch(geTAllProducts(1))
  }, [dispatch]);
  return (
    <>
      <div className={style.filtros}>
      <Filter /> 
      <BusquedaProducts />
      </div>
        {/* <div className={style.card}>
        <img src={props.img} alt={props.name} />
      </div> */}
      <div>
        <div className={style.page}>
          {Product?.map((e) => {
          //  console.log(e._id);
            return (
              <div key={e._id}>
                {/* <Link to={`/productDetail/${e._id}`}> */}
                  <Card
                    id={e._id}
                    name={e.name}
                    img={e?.image}
                    precio={e.price}
                  />
                {/* </Link> */}
              </div>
            );
          })}
           
        </div>
        
        <div className={style.paginado}>
          <Paginado
          product={product}
          />
          </div>
      </div>
    </>
  );
}
