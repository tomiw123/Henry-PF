import React from 'react'
import Carrito from '../Carrito/Carrito'
import style from './CartForm.module.css'

const CartForm = () => {
  return (
    <div className={style.principal}>
      <form>
      <label htmlFor="">Ingresa tu nombre</label>
        <input type="text" />
        <label htmlFor="">Ingresa tu Email</label>
        <input type="text" />
        <label htmlFor="">Numero de telefono</label>
        <input type="text" />
        <label htmlFor="">Direccion</label>
        <input type="text" />
        <button> Finalizar compra</button>
      </form>
      <Carrito/>
    </div>
  )
}

export default CartForm