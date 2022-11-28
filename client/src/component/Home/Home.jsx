import React from 'react'
import style from "./Home.module.css"
import Carrousel from './Carrousel/Carrousel'



const Home = () => {
  //  console.log('aa')

  return (
    <div>
        <div>
            <Carrousel />
        </div>
        <div className={style.container}>
          <div className={style.card}>
          <div className={style.title}></div>
          </div>
        </div>
      </div>
  )
}

export default Home

