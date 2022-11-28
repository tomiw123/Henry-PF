import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import style from './Carrousel.module.css'



const Carrousel = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="https://irp-cdn.multiscreensite.com/1e15d305/MOBILE/jpg/1622772-el-almacen-parrilla-banner.jpg" onDragStart={handleDragStart} role="presentation" className={style.image}/>,
        <img src="https://www.momentosfriko.com/Portals/MomentosFriko/Images/tips-asado-banner_blog.jpg?ver=2020-06-11-144643-457" onDragStart={handleDragStart} role="presentation" className={style.image} />,
        <img src="https://olivetto.com.co/wp-content/uploads/Asados-banner.jpg?x16765" onDragStart={handleDragStart} role="presentation" className={style.image}/>,
      ];

  return (
    
    <div className={style.contenedor}>
        <AliceCarousel mouseTracking items={items} disableButtonsControls={true} autoPlayInterval={3000}  autoPlay={true} infinite={true} disableDotsControls={true}/>
    </div>
  
  )
}

export default Carrousel