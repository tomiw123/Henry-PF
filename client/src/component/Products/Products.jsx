import React, { useState, useEffect } from "react";
import style from "./Products.module.css";
import Card from "./CardProducts/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geTAllProducts} from "../../redux/actions/actions";
// import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
import BusquedaProducts from "../BarraDeBusqueda/BusquedaProducts";
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
      <div className={style.card}>
        <BusquedaProducts />
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <div className={style.page}>
          {Product?.map((e) => {
            return (
              <div key={e._id}>
                <Link to={`/productDetail/${e._id}`}>
                  <Card
                    key={e._id}
                    name={e.name}
                    img={e?.image}
                    precio={e.price}
                  />
                </Link>
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
