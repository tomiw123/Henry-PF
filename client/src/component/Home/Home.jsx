import React from 'react'
import style from "./Home.module.css"
import Card from "../Card/Card"
import Products from "./Products.json"
import Carrousel from './Carrousel/Carrousel'
import {Link} from 'react-router-dom'


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
              <Link to={`/product/${e.id}`}>
                <Card 
                  key={e.name}
                  name= {e.name}
                  img= {e?.image}
                  precio= {e.price}/>
              </Link> 
            )
            })
        }
        </div>
      </div>
  )
}

export default Home

