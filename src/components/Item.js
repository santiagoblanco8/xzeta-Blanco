import React from 'react'

export const Item = ({producto}) =>{
  return(
    <div id='item'>
      <h2>{producto.name}</h2>
      <h2>{producto.price}</h2>
      <h2>{producto.id}</h2>
    </div>
  )
}
