import React, { useState } from 'react'
import './ItemListContainer.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { cartContext } from './HOCContext'
export const Item = ({producto}) =>{


  return(
    <Card style={{ width: '18rem' }} id="item">
  <Card.Img variant="top" id="cardImage" src={producto.pictureUrl} />
  <Card.Body>
    <Card.Title>{producto.title}</Card.Title>
    <Card.Title>Precio: ${cartContext}{producto.price}</Card.Title>
    <Card.Text>
      {producto.description}
    </Card.Text>
    <Button variant="primary">
      <Link to={`/item/${producto.id}`} className="button-detail">
        Ver detalle de producto
      </Link>
    </Button>
  </Card.Body>
</Card>
  )
}
