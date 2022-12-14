import React, { useState } from 'react';
import style from '../AdminProduct/AdminProduct.module.css'
import { useDispatch, useSelector } from "react-redux";
import { adminDeleteProduct, geTAllProducts } from '../../../redux/actions/actions'
import { Link } from 'react-router-dom'

const AdminProduct = (props) => {

    const dispatch = useDispatch();
    const AllProducts = useSelector((state) => state.products.docs)


    const [counter, setCounter] = useState(0)
    const maxCounter = () => {
        setCounter(counter + 1)
    }
    const minCounter = () => {
        setCounter(counter - 1)
    }

    const deleteProduct = (id) => {
        if (window.confirm("Los cambios van a ser eliminados, desea continuar?")) {
        dispatch(adminDeleteProduct(id))
        dispatch(geTAllProducts())
    }
}
    return (
        <div>
            
        <div className={style.oveflow}>
            
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img className={style.img} src={props.image} alt="" />
                    <h1 className={style.name}>{props.name}</h1>
                </div>
                {/* <div className={style.counterContainer}> */}
                    {/* <button className={style.counterBtn} onClick={minCounter}>-</button> */}
                    {/* <div className={style.counterNumber}>{counter}</div> */}
                    {/* <button className={style.counterBtn} onClick={maxCounter}>+</button> */}
                {/* </div> */}
                <div className={style.btnContainer}>
                <Link to={`/productDetail/${props.id}`}> 
                         <button className={style.btn1}>Detalle</button> 
                     </Link>
                    <Link to={`/edit/${props.id}`}> 
                         <button className={style.btn}>Editar</button> 
                     </Link>
                    <button className={style.btn2} onClick={() => deleteProduct(props.id)}>Borrar</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminProduct;