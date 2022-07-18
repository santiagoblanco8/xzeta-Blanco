import React, { useEffect } from 'react';
import { useState, createContext} from 'react';
import {getDocs, collection, getFirestore} from 'firebase/firestore'

export const myContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [importe, setImporte] = useState(0);
    const [cartVacio, setCartVacio] = useState(true)

    useEffect (() => {
      console.log(cart)
    }, [cart])

    function addItem(item, cant) {
      setCartVacio(false)
      if(isInCart(item.id)){
        let newCart = cart;
        let indexProducto = newCart.findIndex(element=> element.id === item.id);
        newCart[indexProducto].cant = Number(newCart[indexProducto].cant) + Number(cant);
        setCart(newCart);
        setCantidad(newCart.reduce((acc, element)=> acc + element.cant, 0));
        setImporte(newCart.reduce((acc,elementX) => acc + elementX.price*elementX.cant, 0));

      } else {
        const newCartX = [...cart, {...item, cant:cant}];
        setCart(newCartX);
        setCantidad(newCartX.reduce((acc, element)=> acc + element.cant, 0));
        setImporte(newCartX.reduce((acc, elementX)=> acc + elementX.price*elementX.cant, 0));
        
    }
  }

    function removeItem(itemId) {
      const newCartX =  cart.filter((este) => este.id !== itemId);
      newCartX===[] && setCartVacio(true);
      setCart(newCartX)
      setCantidad(newCartX.reduce((acc, element)=> acc + element.cant, 0));
      setImporte(newCartX.reduce((acc, elementX)=> acc + elementX.price*elementX.cant, 0));
    }

    function clear() {
      const newCartX= [];
      setCart(newCartX);
      setCantidad(0);
      setCartVacio(true);
      setImporte(0);
    }

    const isInCart = (id) => {
      return cart.find((este) => este.id === id)
    }
  return (
    <>
    <myContext.Provider value={{cart, cantidad, importe, cartVacio, addItem, removeItem, clear}}>
    {children}
    </myContext.Provider>
    </>
  )
}
