import React, { Component, useEffect, useState } from 'react'


export default function ItemCount({limiteStock, valorInicial, onAdd}){


    const [numeroFinal, setNumeroFinal] = useState(valorInicial);

    useEffect(() => {
      if (numeroFinal > limiteStock) {
        alert("No puede superar la cantidad maxima de stock")
        setNumeroFinal(limiteStock)
      }
    }, [numeroFinal])
    
    
    function sumarNumero(){
        setNumeroFinal(numeroFinal + 1);
    }

    function restarNumero(){
        setNumeroFinal(numeroFinal - 1)
    }

  return (
    <div style={{ border: "3px solid blue", width: "200px"}}
    > <h1 style={{textAlign: "center"}}>{numeroFinal}</h1>
    <button onClick={sumarNumero}> + </button>
    <button onClick={restarNumero}> - </button>
    <h2><button onClick={()=>onAdd(numeroFinal)}>Agregar al carrito</button>
      </h2>
    </div>
  )
}


