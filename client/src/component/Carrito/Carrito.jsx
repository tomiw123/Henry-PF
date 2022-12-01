import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/actions/actions";
import s from './Carrito.module.css';

const Carrito = () => {
    const [openedCart, setCart] = useState(false);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)
    const openCart = ()=> {
        setCart(!openedCart)
    }
    const cart = useSelector((state)=> state.cart);
    useEffect(()=>{
        let suma = 0;
        for (let i = 0; i < cart.length; i++) {
            suma = suma + cart[i].price*cart[i].quantity
        }
        setTotal(suma)
    })
    
    const deleteProd = (id)=> {
        setTimeout(()=>{
            dispatch(deleteFromCart(id))
        }, 50)
    }
   

    return (
        <div className={s.cart}>
            <BsIcons.BsCartFill onClick={openCart}/>
            <div onClick={openCart} className={openedCart? s.backToHome : s.none}></div>
            <div className={openedCart? s.openCart: s.closeCart}>
                <div className={s.cross}>
                    <GrIcons.GrClose className={s.close} onClick={openCart}/>
                </div>
                        <ul className={s.lista}>  
                            <li className={s.listObj}>Producto</li>
                            <li className={s.listUni}>Unid.</li>
                            <li className={s.listObj}>Precio</li>
                        </ul>
                    {cart?.map(p=> {
                        // let [counter, setCounter] = useState(p.quantity)
                        return (
                            <div className={s.miniProd} key={p.id}>
                                <img src={p.image} alt="" className={s.image} />
                                <div className={s.prod}>{p.name}</div>
                                {/* <button className={Style.btnmaxmin} onClick={handleMin}>-</button> */}
                                <div className={s.prod}>{p.quantity}u</div>
                                {/* <button className={Style.btnmaxmin} onClick={handleMax}>+</button> */}
                                <div className={s.prod}>${p.price*p.quantity},00</div>
                                <button className={s.boton} onClick={()=> deleteProd(p.id)}>X</button>
                            </div>
                        )
                    })}
                <div className={s.total}>
                    <h3>Total</h3>
                    <h3>$ {total},00 </h3>
                </div>
                
                <div className={s.finalizar}>
                    <button className={s.button}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito;
