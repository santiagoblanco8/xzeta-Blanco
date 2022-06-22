import React, { Component, useEffect, useState } from 'react'


export default function ItemCount(limiteStock){


    const [numeroFinal, setNumeroFinal] = useState(1);

    useEffect(() => {
      if (numeroFinal > 5) {
        alert("No puede superar la cantidad maxima de stock")
        setNumeroFinal(5)
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
    </div>
  )
}


