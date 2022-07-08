import React, {Component} from 'react';
import { createContext, useState } from 'react';

export const cartContext = createContext(null);

export default function HOCContext({ children }) {
  
  const [cartValue, setCartValue] = useState(5);

  return (
     <>
     { children }
     </>
  )
}
