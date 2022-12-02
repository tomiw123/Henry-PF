import React, {useState} from 'react';
import style from '../AdminProduct/AdminProduct.module.css'
import { FiDelete } from 'react-icons/fi'
import { IconContext } from "react-icons";

const AdminProduct = (props) => {

    const [counter, setCounter] = useState(0)
    const maxCounter =() => {
        setCounter(counter + 1)
    }
    const minCounter =() => {
        setCounter(counter - 1)
    }
    return (
        <div className={style.oveflow}>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img className={style.img} src={props.image} alt="" />
                    <h1 className={style.name}>{props.name}</h1>
                </div>
                <div className={style.counterContainer}>
                    <button className={style.counterBtn} onClick={minCounter}>-</button>
                    <div className={style.counterNumber}>{counter}</div>
                    <button className={style.counterBtn} onClick={maxCounter}>+</button>
                    </div>
                    <div className={style.btnContainer}>
                        <button className={style.btn}>Editar</button>
                        <button className={style.btn2}>Borrar</button>
                    </div>
            </div>
        </div>
    );
};

export default AdminProduct;