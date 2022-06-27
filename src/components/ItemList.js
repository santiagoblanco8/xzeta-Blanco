import React from 'react'

export default function ItemList({productos}) {
  return (
    <div>
      {productos.map((producto) => (
        
        <div key={producto.id}>
          <h2>{producto.name}</h2>
                <h2>id: {producto.id}</h2>
                  <h3>Precio: {producto.price}$</h3>
        </div>
        
      ))}
      </div>
  );
}
