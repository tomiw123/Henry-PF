import React from "react";
import style from "./Products.module.css";
import Card from "./CardProducts/Card";
//import Product from "./Products.json";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { geTAllProducts } from "../../redux/actions/actions";
import Loading from "../Loading/Loading";

export default function Products(props) {
const dispatch = useDispatch();
  const Product = useSelector(state => state.products.docs);
  useEffect(()=>{dispatch(geTAllProducts())},[dispatch])
  console.log(Product)

 
  // return Product.length === 0 ? (
    // <div>
      {/* <Loading /> */}
    {/* </div> */}
  // ) : 
  return(
    <>
      {/* <div className={style.salto}></div> */}
      <div className={style.card}>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <div className={style.page}>
          {Product?.map((e) => {
            return (
            <div key={e._id}>
              <Link to={`/productDetail/${e._id}`} >
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
      </div>
    </>
  );
}
