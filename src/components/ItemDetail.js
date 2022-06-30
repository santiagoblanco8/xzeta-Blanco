import React from 'react';
import './ItemDetailContainer.css';
export const ItemDetail = ({producto}) => {

  return (
    <div id="item-detail">
      <div id="portada">
          <img src={producto.pictureUrl} alt={producto.title}/> 
      </div>
      <div id="data">
        <h1>{producto.title}</h1>
        <h1>{producto.description}</h1>
        <h1>${producto.price}</h1>

      </div>
      
      
      
      
      </div>
  )
}
