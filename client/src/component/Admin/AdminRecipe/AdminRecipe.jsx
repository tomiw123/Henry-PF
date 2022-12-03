import React, {useState} from 'react';
import style from '../AdminRecipe/AdminRecipe.module.css'
//import { FiDelete } from 'react-icons/fi'
//import { IconContext } from "react-icons";

const AdminRecipe = (props) => {

    

    return (
        <div className={style.oveflow}>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img className={style.img} src={props.image} alt="" />
                    <h1 className={style.name}>{props.name}</h1>
                </div>
                
            
                    <div className={style.btnContainer}>
                        <button className={style.btn}>Editar</button>
                        <button className={style.btn2}>Borrar</button>
                    </div>
            </div>
        </div>
    );
};

export default AdminRecipe;