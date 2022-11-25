import React from 'react'
import style from "./Home.module.css"
import Card from "../Card/Card"
import Products from "./Products.json"


const Home = () => {
  //  console.log('aa')

  return (
    
    <div className={style.page}> 
    {
    Products.map((e)=>{
        return(
            <Card 
            key={e.name}
            name= {e.name}
            img= {e?.image}
            precio= {e.price}/>
        )
        })
    }
    </div>
  )
}

export default Home