import React from "react";
import style from "./Products.module.css";
import Card from "./CardProducts/Card";
import Product from "./Products.json";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Products(props) {
  return Product.length === 0 ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      {/* <div className={style.salto}></div> */}
      <div className={style.card}>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <div className={style.page}>
          {Product.map((e) => {
            return (
              <Link to={`/productDetail/${e.id}`} key={e.id}>
                <Card
                  key={e.name}
                  name={e.name}
                  img={e?.image}
                  precio={e.price}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
