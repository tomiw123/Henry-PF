import React, {useState} from 'react'
import Style from './CardProduct.module.css'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from "react-icons";


const CardProduct = () => {

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
            <img src="https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/tablas.jpg?alt=media&token=132524b4-d106-4c37-a888-d771bdc26f75" width="400px" height="350px" alt="" />
          </div>
          <div className={Style.Container}>{/********** */}
            <div className={Style.Title}>
              <h1>Tabla1</h1>
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
            <div className={Style.Price}>$1000</div>
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
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quidem minima magni earum illo suscipit,dolorum maxime voluptate necessitatibus ut nemo reiciendis,sint porro ratione. Dolor iusto ipsa accusantium aspernatur.</p>
        </div>
        {/* dejar un apartado para poner abajo las recetas que se pueden hacer con el producto*/}
      </div>
    </div>
  )
}

export default CardProduct