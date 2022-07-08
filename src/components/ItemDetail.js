import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import './ItemDetailContainer.css';
import { myContext } from './CartContext';
export const ItemDetail = ({producto}) => {

  const {addItem} = useContext(myContext);
  function onAdd(cant) {
    alert(cant + " productos han sido agregados al carrito")
  }

  return (
    <div id="item-detail">
      <div id="portada">
          <img id="pictureDetail" src={producto.pictureUrl} alt={producto.title}/> 
      </div>
      <div id="data">
        <h1>{producto.title}</h1>
        <h1>{producto.description}</h1>
        <h1>${producto.price}</h1>
      </div>
      <div>
        <ItemCount onAdd={onAdd} valorInicial={0} limiteStock={5} producto={producto} />
      </div>
      
      
      
      </div>
  )
}
