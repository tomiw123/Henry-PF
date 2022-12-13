import React from "react";
import CategoryHome from "../CategoryHome/CategoryHome";
import Carrousel from "./Carrousel/Carrousel";
import style from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import NotFound from "../NotFound/NotFound"
import Videos from "./Videos/Videos";


const Home = () => {
  return !CategoryHome || !Carrousel ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div>
      <div>
        <Carrousel />
      </div>
      <div className={style.video}>
        <div className={style.container}>
          <h1 className={style.slogan}>
            PRIMERO LO PROBAMOS, DESPUES TE LO OFRECEMOS
          </h1>
          <p className={style.description}>
            Los productos que usamos todos los dias pueden ser tuyos a los
            mejores precios!
          </p>
          <div className={style.cardcontainer}>
            <Link to="/products">
              <CategoryHome
                title="PRODUCTOS"
                image={
                  "https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/tablas.jpg?alt=media&token=132524b4-d106-4c37-a888-d771bdc26f75"
                }
                desc="Parrillas, fogoneros, cuchillos y mas!"
              />
            </Link>
            <Link to="/recipes">
              <CategoryHome
                title="RECETAS"
                image={
                  "https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/8e6d317e-d194-48dc-aeae-50c3d2d65262.jpg?alt=media&token=249c7c6d-8b58-4598-94de-f20c38ef39e9"
                }
                desc="Encontra aca las mejores recetas para tus asados"
              />
            </Link>
          </div>
        </div>
        <Videos />
      </div>
    </div>
  );
};

export default Home;
