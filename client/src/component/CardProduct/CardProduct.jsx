import React, { useState, useEffect } from 'react'
import Style from './CardProduct.module.css'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from "react-icons";
import productJson from '../Home/Products.json'
import { useParams } from 'react-router-dom';


const CardProduct = () => {

  const paramsId = useParams()
  let productFiltered;
  let productsId = productJson.map((p) => {
    if (p.id === paramsId.id) {
      productFiltered = p;
      return productFiltered;
    }
  })

  console.log(productFiltered.name)


  // for (let i = 0; i < productJson.length; i++) {
  //     if(productJson[i].id === paramsId.id){
  //     productsId = productJson[i]
  //     return productsId;
  //   }
  //   }







  const [counter, setCounter] = useState(0);

  function handleMax() {
    setCounter(counter + 1)
  }

  function handleMin() {
    setCounter(counter - 1)
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
                <button className={Style.btnmaxmin} onClick={handleMax}>+</button>
                <div className={Style.Num}>{counter}</div>
                <button className={Style.btnmaxmin} onClick={handleMin}>-</button>
              </div>
              <div className={Style.Compra}>
                <button className={Style.btn}>Comprar</button>
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

export default CardProduct