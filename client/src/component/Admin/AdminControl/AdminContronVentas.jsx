import React,{ useEffect } from "react";
import s from "./AdminContronVentas.module.css";
import {totalPayment} from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Ventas } from "./Ventas";
import { Navigate } from "react-router-dom";

const ControlDeVentas = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalPayment())
    }, [dispatch]);
    const recibos = useSelector((state) => state.totalVentas);
    console.log(recibos);

    const user = localStorage.getItem("role");
    if (user !== "admin") {
      return <Navigate to="/" />;
    }

    return (
        <div className={s.block}>
            <div className={s.grid}>
                <div className={s.elemento}></div> 
                <div className={s.elemento}>ID</div>
                <div className={s.elements}>Fecha de Pedido</div>
                <div className={s.elements}>Nombre de Usuario</div>
                <div className={s.elements}>Direccion</div>
                <div className={s.elements}>Cantidad </div>
                <div className={s.elements}>Precio Final</div>
                <div className={s.elements}>Estado de envio</div>
            </div>
            {recibos?.map((r,index)=> {
                
                return(
                    <div key={index}>
                       <Ventas
                      recibos={r} /> 
                    </div>
                ) 
            })}
        </div>
    )
}

export default ControlDeVentas;
