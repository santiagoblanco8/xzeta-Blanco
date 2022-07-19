import React from 'react'
import './ItemListContainer.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const Item = ({producto}) =>{


return(
    <Card style={{ width: '18rem' }} id="item" data-aos="flip-left" data-aos-delay="300" > 
  <Card.Img variant="top" id="cardImage" src={producto.pictureUrl} />
  <Card.Body>
    <Card.Title>{producto.title}</Card.Title>
    <Card.Title>Precio: ${producto.price}</Card.Title>
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
