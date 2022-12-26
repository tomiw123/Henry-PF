import React, { useState } from 'react'
import * as BsReactIcons from 'react-icons/bs';
import { messege_2, estadoEnvio } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux'
import s from "./AdminContronVentas.module.css";


export const Ventas = ({recibos}) => {


    const dispatch = useDispatch();
    let [open, setOpen] = useState(false);
    let [cambio, setCambio] = useState(recibos.envio);
    
    let arrSuma = [];
    recibos.products.map(r => arrSuma.push(r.precioUnitario))
                let suma = 0;
                let arrCant = [];
                recibos.products.map(r => arrCant.push(r.cantidad))
                let cant = 0;
                for (let i = 0; i < arrCant.length; i++) {
                    cant = cant + arrCant[i]
                    
                }
                for (let i = 0; i < arrSuma.length; i++) {
                    suma = suma + arrSuma[i]*arrCant[i] 
                }

   const estado = () => {
    if(!recibos.envio){
        setCambio(true)
        //mensaje de envio notificacion
        dispatch(messege_2(recibos)) 
        dispatch(estadoEnvio(recibos._id)) 
    }
    if(recibos.envio){
        
        setCambio(true)
    }
   }

  return (
    <div>
        <div className={s.grid}>
                            <BsReactIcons.BsArrowDownCircle className={s.boton} onClick={()=> setOpen(!open)} />
                            <div className={s.elements}>{recibos.id}</div>
                            <div className={s.elements}>{recibos.fecha}</div>
                            <div className={s.elements}>{recibos.name}</div>
                            <div className={s.elements}>{recibos.direccion}</div>
                            <div className={s.elements}>{cant}</div>
                            <div className={s.elements}>{suma}</div>
                            <div className={s.elements}>
                            
                            <button 
                                onClick={()=>estado()} className={s.button}>
                                {cambio?(<h1 className="group bg-green-600
                                   relative flex-items-center w-18 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  mb-4"> Enviado </h1>)
                                   :(
                                   <h1 className="group bg-blue-600
                                   relative flex-items-center w-18 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  mb-4 " > Pendiente </h1> 
                                )}
                            </button>
                            
                            </div>
                            
                        </div>

                        <div className={open? s.opened: s.closed}>
                            <div className={s.miniGrid}>
                                {/* <div></div> */}
                                <div className={s.miniElements}>Correo Electronico </div>
                                <div className={s.miniElements}>Productos</div>
                                <div className={s.miniElements}>Cantidad</div>
                                <div className={s.miniElements}>Precio</div>
                                
                            </div>
                            <div className={s.miniGrid}>
                                {/* <div></div> */}
                                <div className={s.miniElements}>{recibos.contacto}</div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                        {recibos.products.map((p,index)=> {
                                            return (
                                                <li key={index}>{p.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                    {recibos.products.map((p,index)=> {
                                            return (
                                                <li key={index}>{p.cantidad}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                    {recibos.products.map((p,index)=> {
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
}
