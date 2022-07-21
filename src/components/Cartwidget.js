import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { myContext } from './CartContext';
import {Link} from 'react-router-dom'
import "./NavBar.css";

export default function Cartwidget() {
  const { cantidad } = useContext(myContext)
  return (
    <Link to= {`/cart`} style={{ color: 'inherit', textDecoration: 'none'}}>
    <div>
      <ShoppingCartIcon/>
      <div className={cantidad===0 ? 'Invisible' : 'Visible'}>
        <p> {cantidad} </p>
      </div>
      </div>
    </Link>
  )
}
