import React from "react";
import style from "./Products.module.css";
import Card from "./CardProducts/Card";
import Product from "./Products.json";
import { Link } from "react-router-dom";

export default function Products(props) {
  return (
    <>
      {/* <div className={style.salto}></div> */}
      <div className={style.card}>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <div className={style.page}>
          {Product.map((e) => {
            return (
              <Link to={`/productDetail/${e.id}`}>
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
