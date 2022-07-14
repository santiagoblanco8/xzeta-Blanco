import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './ItemCount.css';

export default function ItemCount({limiteStock, valorInicial, onAdd}){

  
    const [numeroFinal, setNumeroFinal] = useState(valorInicial);

    const [carrito, setCarrito] = useState(true)

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
      <div id="item-count">
        <h1 style={{textAlign: "center"}}>{numeroFinal}</h1>
  
      <button onClick={sumarNumero} id="button-count"> + </button>
      <button onClick={restarNumero} id="button-count"> - </button>
      <button onClick={()=>onAdd(numeroFinal, limiteStock)} id="add-cart">Agregar al carrito</button>
      <button  id="add-cart">
        <Link to={`/cart`} className="button-detail2">
        Terminar mi compra
        </Link>
        </button>
  
        
      </div>
    )
  }


