import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.card}>
      
      <img src={props.img} alt={props.name} />

      <h1>{props.name}</h1>

      <h2>${props.precio}</h2>

      <div className="flex-auto flex space-x-4">
        <button className={style.button}>Ver Más!</button>
      </div>
    </div>

//     <div className="flex justify-center">
//   <div className="rounded-lg shadow-lg bg-white max-w-sm m-4">
//     <a href="#!">
//       <img className="rounded-t-lg" src={props.img} alt=""/>
//     </a>
//     <div className="p-6">
//       <h5 className="text-gray-900 text-xl font-medium mb-2">{props.name}</h5>
//       <p className="text-gray-700 text-base mb-4">
//       ${props.precio}
//       <button className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">-</button>

//       <button className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+</button>
//       </p>

//       <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver Más</button>

//       <button type="button" className=" m-2 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
//       // onClick={()=> {addProd(Product._id ,Product.name, Product.image, Product.price, counter)}} 
//       >Agregar al Carrito</button>
//     </div>
//   </div>
// </div>
  );
}
