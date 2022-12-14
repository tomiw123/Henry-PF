import React,{ useEffect } from "react";
import s from "./AdminContronVentas.module.css";

//import recibos from './ComprasUser.json'
import {totalPayment} from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Ventas } from "./Ventas";

const ControlDeVentas = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalPayment())
    }, [dispatch]);
    const recibos = useSelector((state) => state.totalVentas);
    console.log(recibos);


    return (
        <div>
            <Link to='/HAdmin'>
          <button className="group bg-green-600
          relative flex-items-center w-48 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  m-5">Volver</button></Link>
        <div className={s.block}>
            <div className={s.grid}>
                <div className={s.elemento}></div> 
                <div className={s.elemento}> </div>
                <div className={s.elements}>Fecha de Pedido</div>
                <div className={s.elements}>Nombre de Usuario</div>
                <div className={s.elements}>Direccion</div>
                <div className={s.elements}>Cantidad </div>
                <div className={s.elements}>Precio Final</div>
                <div className={s.elements}>Estado de envio</div>
            </div>
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
