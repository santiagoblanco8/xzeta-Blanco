import React from 'react';
import { useState, createContext} from 'react';

export const myContext = createContext(null);

export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    function addItem(item, quantity) {
      let alreadyWas = isInCart(item.id);
      if(alreadyWas){
        removeItem(alreadyWas.id);
        setCart( [...cart, {...item, cantidad:quantity +alreadyWas.cantidad}])
      }else{
        setCart([...cart, {...item, cantidad:quantity}])
      }
    }

    function removeItem(itemId) {
      setCart( cart.filter((este) => este.id !== itemId))
    }

    function clear() {
      setCart([])
    }

    const isInCart = (id) => {
      cart.find((este) => este.id === id);
    }
  return (
    <>
    <myContext.Provider value={{cart, addItem, removeItem, clear}}>
    {children}
    </myContext.Provider>
    </>
  )
}