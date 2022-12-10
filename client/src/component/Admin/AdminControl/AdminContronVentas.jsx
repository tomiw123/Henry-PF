import React from "react";
import { useState } from "react";
import s from "./AdminContronVentas.module.css";
import * as BsReactIcons from 'react-icons/bs';
import recibos from './ComprasUser.json'

const ControlDeVentas = () => {
    // let recibos = [{id:1}]
    
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
            {recibos?.map((r)=> {
                let [open, setOpen] = useState(false);
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
                    <div>
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
                                        {r.products.map(p=> {
                                            return (
                                                <li>{p.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                    {r.products.map(p=> {
                                            return (
                                                <li>{p.cantidad}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={s.miniElements}>
                                    <ul className={s.list}> 
                                    {r.products.map(p=> {
                                            return (
                                                <li>{p.precioUnitario}</li>
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
