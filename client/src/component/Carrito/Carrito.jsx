import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, addCount, payment } from "../../redux/actions/actions";
import s from './Carrito.module.css';

const Carrito = () => {
    const [openedCart, setCart] = useState(false);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)
    const openCart = ()=> {
        setCart(!openedCart)
    }
    let cart = useSelector((state)=> state.cart);
    let newCart = [];

    for (let i = 0; i < cart.length; i++) {
        if(cart[i].name){
            newCart.push(cart[i])
        }
    }

    useEffect(()=>{
        let suma = 0;
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].quantity){
                suma = suma + cart[i].price*cart[i].quantity
            }
        }
        setTotal(suma)
    })
    
    const deleteProd = (id)=> {
        setTimeout(()=>{
            dispatch(deleteFromCart(id))
        }, 50)
    }
    
    const sumarCantProd = (id)=> {
        let obj = cart.find(p => p.id === id)
        let lugar = cart.indexOf(obj)
        let cantidad= obj.quantity + 1
        setTimeout(()=> {
            dispatch(addCount({cantidad, lugar}))
        },30)
        console.log(cart)
    }
    const restarCantProd = (id)=> {
        let obj = cart.find(p => p.id === id)
        let lugar = cart.indexOf(obj)
        if(obj.quantity > 1){
            obj= {
                    ...obj,
                    quantity: obj.quantity - 1
                }
        }
        let cantidad= obj.quantity
        setTimeout(()=> {
            dispatch(addCount({cantidad, lugar}))
        },30)
    }

    const finalizarCompra = (newCart)=>{
        let carritoFinal = [];
        for (let i = 0; i < newCart.length; i++) {
            let obj = {name: newCart[i].name, price: newCart[i].price, id: newCart[i].id, cant: newCart[i].quantity}
            carritoFinal.push(obj)
        }
         dispatch(payment(carritoFinal)).then((e)=> window.location.replace(e))
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
                        if(p.name){
                            return (
                                <div className={s.miniProd} key={p.id}>
                                    <img src={p.image} alt="" className={s.image} />
                                    <div className={s.prod}>{p.name}</div>
                                    <div className={s.counter}>
                                        <button className={s.contador} onClick={()=>restarCantProd(p.id)}>-</button>
                                        <div className={s.prod}>{p.quantity}u</div>
                                        <button className={s.contador} onClick={()=> sumarCantProd(p.id)}>+</button>
                                    </div>
                                    <div className={s.prod}>${p.price*p.quantity},00</div>
                                    <button className={s.boton} onClick={()=> deleteProd(p.id)}>X</button>
                                </div>
                            )
                        }
                    })}
                <div className={s.total}>
                    <h3>Total</h3>
                    <h3>$ {total},00 </h3>
                </div>
                
                <div className={s.finalizar}>
                    <button className={s.button} onClick={()=> {finalizarCompra(newCart)}}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito;
