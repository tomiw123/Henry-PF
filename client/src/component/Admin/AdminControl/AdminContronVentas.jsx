import React,{ useEffect, useState } from "react";
import s from "./AdminContronVentas.module.css";
import * as BsReactIcons from 'react-icons/bs';
//import recibos from './ComprasUser.json'
import {totalPayment} from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const ControlDeVentas = () => {
    const dispatch = useDispatch();
    let [open, setOpen] = useState(false);
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
                
                let arrSuma = [];
                r.products.map(r => arrSuma.push(r.precioUnitario))
                let suma = 0;
                let arrCant = [];
                r.products.map(r => arrCant.push(r.cantidad))
                let cant = 0;
                for (let i = 0; i < arrCant.length; i++) {
                    cant = cant + arrCant[i]
                    
                }
                for (let i = 0; i < arrSuma.length; i++) {
                    suma = suma + arrSuma[i]*arrCant[i] 
                }
                return(
                    <div key={index}>
                        <div className={s.grid}>
                            <BsReactIcons.BsArrowDownCircle className={s.boton} onClick={()=> setOpen(!open)} />
                            <div className={s.elements}>{r.id}</div>
                            <div className={s.elements}>{r.fecha}</div>
                            <div className={s.elements}>{r.name}</div>
                            <div className={s.elements}>{r.direccion}</div>
                            <div className={s.elements}>{cant}</div>
                            <div className={s.elements}>{suma}</div>
                            <div className={s.elements}>Enviado</div>
                        </div>
                        <div className={open? s.opened: s.closed}>
                            <div className={s.miniGrid}>
                                <div></div>
                                <div className={s.miniElements}>Correo Electronico </div>
                                <div className={s.miniElements}>Productos</div>
                                <div className={s.miniElements}>Cantidad</div>
                                <div className={s.miniElements}>Precio</div>
                            </div>
                            <div className={s.miniGrid}>
                                <div></div>
                                <div className={s.miniElements}>{r.contacto}</div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                        {r.products.map((p,index)=> {
                                            return (
                                                <li key={index}>{p.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                    {r.products.map((p,index)=> {
                                            return (
                                                <li key={index}>{p.cantidad}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                    {r.products.map((p,index)=> {
                                            return (
                                                <li key={index}>{p.precioUnitario}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                </div>
                        </div>
                    </div>
                ) 
            })}
        </div>
    )
}

export default ControlDeVentas;
