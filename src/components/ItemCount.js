import React, { Component, useEffect, useState } from 'react'
import './ItemCount.css';

export default function ItemCount({limiteStock, valorInicial, onAdd}){

  function onAdd(cant) {
    alert(cant + " productos han sido agregados al carrito")
  }
    const [numeroFinal, setNumeroFinal] = useState(valorInicial);

    useEffect(() => {
      if (numeroFinal > limiteStock) {
        alert("No puede superar la cantidad maxima de stock")
        setNumeroFinal(limiteStock)
      }
      else if(numeroFinal < 1) {
        setNumeroFinal(1)
      }
    }, [numeroFinal])
    
    
    function sumarNumero(){
        setNumeroFinal(numeroFinal + 1);
    }

    function restarNumero(){
        setNumeroFinal(numeroFinal - 1)
    }

  return (
    <div id="item-count"
    > <h1 style={{textAlign: "center"}}>{numeroFinal}</h1>
    <button onClick={sumarNumero} id="button-count"> + </button>
    <button onClick={restarNumero} id="button-count"> - </button>
    <button onClick={()=>onAdd(numeroFinal)} id="add-cart">Agregar al carrito</button>
  
    </div>
  )
}


