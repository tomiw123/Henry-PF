import React from 'react'
import Style from './CardProduct.module.css'

const CardProduct = () => {
  return (
    <div className={Style.CardProduct}>
      <div className={Style.ImgCont}>
      <div className={Style.Image}>
          <img src="https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/tablas.jpg?alt=media&token=132524b4-d106-4c37-a888-d771bdc26f75" alt="" />
        </div>
        <div className={Style.Container}>{/********** */}
          <div className={Style.Title}>
            <h1>Tabla1</h1>
          </div>
          <div className={Style.Starts}>
            <h1>*****</h1>
          </div>
          <div className={Style.Price}>$1000</div>
          <div className={Style.ContButtom}>
            <div className={Style.Cont}>
              <div className={Style.Max}>+</div>
              <div className={Style.Num}>N°</div>
              <div className={Style.Min}>-</div>
            </div>
            <div className={Style.Compra}>
              <h1>Comprar</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.Description}>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam quidem minima magni earum illo suscipit,dolorum maxime voluptate necessitatibus ut nemo reiciendis,sint porro ratione. Dolor iusto ipsa accusantium aspernatur.</p>
      </div>
      {/* dejar un apartado para poner abajo las recetas que se pueden hacer con el producto*/}
    </div>
  )
}

export default CardProduct