import React from "react";
// import loading from "../../src/pictures/loading.gif";
import loading from '../../assets/loadingFlame.gif'
// import "./Loading.css";

export default function Loading() {
  return (
    <div className="box_loading">
      <img src={loading} alt="Loading" />
    </div>
  );
}
