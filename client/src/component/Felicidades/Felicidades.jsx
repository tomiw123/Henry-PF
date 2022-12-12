import React from 'react'
import style from './Felicidades.module.css'
import img from '../../assets/dosdagas-png-transparente.png'
import check from '../../assets/pngegg.png'
const Felicidades = () => {
  return (
    <div className={style.Felicidades}>
        <div className={style.Conteiner}>
            <div className={style.logo}>
                <img src={img} alt="" />
            </div>
            <div className={style.agradecimiento}>
                <h1>Felicidades por tu compra, ha salido todo correcto</h1> 
            </div>
            <div className={style.recibo}>
                <div className={style.title}>
                    <h1>Recibo de Venta</h1>
                </div>
                <div className={style.grilla}>
                    <div className={style.grid}>
                        <div>Producto</div>
                        <div>Cantidad</div>
                        <div>Precio por Unidad</div>
                        <div>Precio Total</div>
                    </div>
                    <div className={style.grid}>
                        <div className={style.elemento}>Pariilla 4</div>
                        <div className={style.elemento}>2</div>
                        <div className={style.elemento}>$50000</div>
                        <div className={style.elemento}>$100000</div>
                    </div>
                </div>
            </div>
            <div className={style.contacto}>
                <div className={style.contactoConUsted}>
                   <h1>En breve no estaremos contactando con Ustes</h1> 
                </div>
                <div className={style.contactoAgradesco}>
                    <h1>Machas Gracias por Confiar en Nosotro</h1>
                </div>
            </div>
            <div className={style.check}>
                <img src={check} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Felicidades