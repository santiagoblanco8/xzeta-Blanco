import React, { useEffect } from 'react';
import { useState, createContext} from 'react';
import {getDocs, collection, getFirestore} from 'firebase/firestore'

export const myContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    useEffect (() => {
      console.log(cart)
    }, [cart])

    function addItem(item, cant) {
      let alreadyWas = isInCart(item.id);
      console.log(alreadyWas)
      if(alreadyWas){
        removeItem(alreadyWas.id);
        setCart( [...cart, {...item, cant:cant +alreadyWas.cant}])
      }else{
        setCart([...cart, {...item, cant:cant}])
      }
    }

    function removeItem(itemId) {
      setCart( cart.filter((este) => este.id !== itemId))
    }

    function clear() {
      setCart([])
    }

    const isInCart = (id) => {
      return cart.some((este) => este.id === id)
    }
  return (
    <>
    <myContext.Provider value={{cart, addItem, removeItem, clear}}>
    {children}
    </myContext.Provider>
    </>
  )
}
