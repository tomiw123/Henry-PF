import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { addToCart, changeFromCart, getIdProducts, cleanProduct } from '../../../redux/actions/actions';
//import style from "./Card.module.css";
import { Oval  } from 'react-loader-spinner'


export default function Card(props) {


  const dispatch = useDispatch();

  

const [counter, setCounter] = useState(1);
  function handleMax() {
    setCounter(counter + 1)
  }

  function handleMin() {
    if(counter > 1){
      setCounter(counter - 1)
    }
  }

  const cart = useSelector((state)=> state.cart)
  // const [cart, setCart] = useState([]);

  const [loader, setLoader] = useState(true)
  setTimeout( ()=> {setLoader(false)}, 800)
  const addProd = (id, name, img, precio, counter)=> {
    let yaEsta = cart.find(p => p.name === name);
    if(!yaEsta){
      const obj = {id, name, image:img, price:precio, quantity: counter}
      setTimeout(()=> {
        dispatch(addToCart(obj))
      },50)
      alert(`${name} agregada al carrito`)
      
    } else {
      yaEsta={
        ...yaEsta,
        quantity: yaEsta.quantity + counter
      }
      setTimeout(()=> {
        dispatch(changeFromCart(yaEsta))
      }, 50)
    }
  }

  return (
    // <div className={style.card}>
      
    //   <img src={props.img} alt={props.name} />

    //   <h1>{props.name}</h1>

    //   <h2>${props.precio}</h2>

    //   <div className="flex-auto flex space-x-4">
    //     <button className={style.button}>Ver Más!</button>
    //   </div>
    // </div>

  <div className="flex justify-center text-center w-80  min-h-max hover:scale-110 transition duration-300 ease-in-out"> 

   <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 items-center content-center bg-zinc-400">
    {loader? (
       <Oval
       height={100}
       width={300}
       color="black"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
       ariaLabel='oval-loading'
       secondaryColor="black"
       strokeWidth={2}
       strokeWidthSecondary={2}
     />
    ): (
      <Link to ={`/productDetail/${props.id}`}> 
      <img className="rounded-t-lg w-full h-52 " src={props.img} alt=""/>
      </Link>
    )}
    
    <div className="p-6 h-60">

      <h5 className="text-gray-900 text-xl font-medium mb-2 h-12 ">{props.name}</h5>

      <h3 className="text-gray-900 text-2xl mb-4 font-medium">
      ${props.precio} </h3>

    <div className="flex justify-center mb-3">
      <button className=" inline-block px-3 py-1 h-7 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleMin}>-</button>

      <p className="text-gray-900 text-base  mx-4 mb-4 font-medium">
      {counter}</p>

      <button className=" inline-block px-3 py-1 h-7 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleMax}>+</button>
      </div>
      
      <div className="flex justify-center ">
      
      <Link to ={`/productDetail/${props.id}`}>
      <button type="button" className=" mx-3 inline-block px-5 h-11  py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >Ver Más</button></Link>

      <button type="button" className=" inline-block px-5 h-11  py-1 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={()=> {addProd(props.id ,props.name, props.img, props.precio, counter)}} 
      >Agregar al Carrito</button>
      </div>

    </div>
  </div>
</div>
  );
}
