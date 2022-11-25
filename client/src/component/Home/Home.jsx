import React from 'react'
import style from "./Home.module.css"
import Card from "../Card/Card"
import Products from "./Products.json"
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import Carrousel from '../Carrousel/Carrousel'


const Home = () => {
  //  console.log('aa')

  return (
    <div>
        <div>
            <Carrousel />
        </div>
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
      </div>
    

  )
}

export default Home

