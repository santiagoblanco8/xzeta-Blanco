import React, { useContext } from 'react'
import { myContext } from './CartContext'


export default function Cart() {
    const {cart, removeItem} = useContext(myContext)
  return (<>
  <div>
    {cart.description}
    {cart.title}
    </div>
    </>
  )
}
