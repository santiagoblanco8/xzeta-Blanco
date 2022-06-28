import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  let pago;

  useEffect(() => {
    pago = new Promise((resolve,reject) =>  {

      setTimeout(()=> {
        if(Math.random() < 0.9){
          resolve([{id: 1, name: "remera 1", price: 200},
                  {id: 2, name: "remera 2", price: 400},
                  {id: 3, name: "remera 3", price: 600},
                  {id: 4, name: "remera personalizable", price: 1200},]);}
          else{
          reject("no existe");
          }
      }
      , 2000)

  });

  pago
      .then((resultado) => {
        setProductos(resultado);
      })
      .catch((error) => {
        console.log(error);
      });


}, []);

  return (
    <div onClick={() => {
      console.log(pago)
    }}>Item
    {productos && <ItemList productos={productos}/>}
    </div>
  )
}
