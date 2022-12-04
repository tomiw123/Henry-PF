import React, { useState, useEffect } from "react";
import style from "./Products.module.css";
import Card from "./CardProducts/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geTAllProducts} from "../../redux/actions/actions";
// import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
// import { useTransition } from "react";

export default function Products(props) {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.products.docs);
  const product = useSelector((state) => state.products);
  console.log(product);
  useEffect(() => {
      dispatch(geTAllProducts(1))
  }, [dispatch]);
  return (
    <>
      <div className={style.card}>
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
<<<<<<< HEAD
        <div>
=======
        
        <div className={style.paginado}>
>>>>>>> 51bd15801fcbfdb33df803fd460bf335403aad41
          <Paginado
          product={product}
          />
          </div>
      </div>
    </>
  );
}
