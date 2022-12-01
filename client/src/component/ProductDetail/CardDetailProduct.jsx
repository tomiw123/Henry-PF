import React, { useState, useEffect } from 'react'
import Style from './CardDetailProduct.module.css'
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from "react-icons";
import productJson from '../Products/Products.json'
import { useParams } from 'react-router-dom';
import { addToCart, changeFromCart } from '../../redux/actions/actions';

const CardDetailProduct = () => {

  const dispatch = useDispatch();
  const paramsId = useParams()
  let productFiltered;
  let productsId = productJson.map((p) => {
    if (p.id === paramsId.id) {
      productFiltered = p;
      return productFiltered;
    }
  })

  // console.log(productFiltered.name)

  const [counter, setCounter] = useState(0);

  function handleMax() {
    setCounter(counter + 1)
  }

  function handleMin() {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  const cart = useSelector((state)=> state.cart)
  // const [cart, setCart] = useState([]);

  const addProd = (id, name, image,price, counter)=> {
    let yaEsta = cart.find(p => p.name === name);
    if(!yaEsta){
      const obj = {id, name, image,price, quantity: counter}
      setTimeout(()=> {
        dispatch(addToCart(obj))
      },50)
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
    <div className={Style.CardProduct}>
      <div className={Style.Container2}>
        <div className={Style.ImgCont}>
          <div className={Style.Image}>
            <img className={Style.img} src={productFiltered.image}  alt="" />
          </div>
          <div className={Style.Container}>{/********** */}
            <div className={Style.Title}>
              <h1>{productFiltered.name}</h1>
            </div>
            <div className={Style.Starts}>
              <IconContext.Provider value={{ color: "yellow" }}>
                <div className={Style.starsIcons}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </IconContext.Provider>
            </div>
            <div className={Style.Price}>${productFiltered.price}</div>
            <div className={Style.ContButtom}>
              <div className={Style.Cont}>
                <button className={Style.btnmaxmin} onClick={handleMin}>-</button>
                <div className={Style.Num}>{counter}</div>
                <button className={Style.btnmaxmin} onClick={handleMax}>+</button>
              </div>
              <div className={Style.Compra}>
                <button className={counter===0 ? Style.btnDis : Style.btn} onClick={()=> {addProd(productFiltered.id ,productFiltered.name, productFiltered.image, productFiltered.price, counter)}}>Comprar</button>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Description}>
          <p className='description'>{productFiltered.description}</p>
        </div>
        {/* dejar un apartado para poner abajo las recetas que se pueden hacer con el producto*/}
      </div>
    </div>
  )
}

export default CardDetailProduct