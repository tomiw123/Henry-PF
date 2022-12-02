import React from 'react'

const prueba = () => {
  return (
    <div>
        <input type="file" onChange={e => console.log(e.target.files[0])}/>
    </div>
  )
}

export default prueba