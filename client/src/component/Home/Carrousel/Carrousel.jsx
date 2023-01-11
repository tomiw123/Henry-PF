import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import style from './Carrousel.module.css'
import img from '../../../assets/fogonero.jpg'
import asado from '../../../assets/asado.jpg'
import achuras from '../../../assets/achuras.jpg'
import achuras2 from '../../../assets/achuras2.jpeg'
import cuchillos from '../../../assets/cuchillos.jpeg'



const Carrousel = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
      <img src={achuras} onDragStart={handleDragStart} role="presentation" className={style.image}/>,
      <img src={img} onDragStart={handleDragStart} role="presentation" className={style.image}/>,
      <img src={asado} onDragStart={handleDragStart} role="presentation" className={style.image}/>,
        // <img src="https://irp-cdn.multiscreensite.com/1e15d305/MOBILE/jpg/1622772-el-almacen-parrilla-banner.jpg" onDragStart={handleDragStart} role="presentation" className={style.image}/>,
        // <img src="https://www.momentosfriko.com/Portals/MomentosFriko/Images/tips-asado-banner_blog.jpg?ver=2020-06-11-144643-457" onDragStart={handleDragStart} role="presentation" className={style.image} />,
        // <img src="https://olivetto.com.co/wp-content/uploads/Asados-banner.jpg?x16765" onDragStart={handleDragStart} role="presentation" className={style.image}/>,
        <img src={cuchillos} onDragStart={handleDragStart} role="presentation" className={style.image}/>,
        <img src={achuras2} onDragStart={handleDragStart} role="presentation" className={style.image}/>,
      ];

  return (
    
    <div className={style.contenedor}>
        <AliceCarousel mouseTracking items={items} disableButtonsControls={true} autoPlayInterval={3000}  autoPlay={true} infinite={true} disableDotsControls={true}/>
    </div>
  
  )
}

export default Carrousel
