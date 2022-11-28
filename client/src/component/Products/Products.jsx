import React from 'react'
import style from "./Products.module.css"
import Card from "./CardProducts/Card"
import Product from "./Products.json"
import {Link} from 'react-router-dom'


const Products = () => {

  return (
    <div>
        <div className={style.page}> 
        
        {
        Product.map((e)=>{
            return(
              <Link to={`/productDetail/${e.id}`}>
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

export default Products

