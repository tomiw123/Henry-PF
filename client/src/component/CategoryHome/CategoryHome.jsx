import React from "react";
import style from "../CategoryHome/Category.module.css";

const CategoryHome = (props) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <img className={style.img} src={props.image} alt="" />
          <div className={style.titlecontainer}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.description}>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
