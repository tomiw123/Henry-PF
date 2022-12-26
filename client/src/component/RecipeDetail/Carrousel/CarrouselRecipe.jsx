import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import style from './CarrouselRecipe.module.css'




const Carrousel = ({image}) => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        
    ];
    console.log(image);

    image?.map((e)=>{ items.push(
        <img src={e} onDragStart={handleDragStart} role="presentation" className={style.img}/>
        )
    })

  return (

    <div className={style.contenedor}>
        <AliceCarousel mouseTracking items={items} disableButtonsControls={true} autoPlayInterval={3000}  autoPlay={false} infinite={true} disableDotsControls={true}/>
    </div>
  
  )
}

export default Carrousel