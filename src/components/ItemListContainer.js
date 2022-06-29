import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { getArray } from './helpers/getArray';
import { array } from '../data/data';
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArray(array)
      .then(res=>setProductos(res))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false))
    
  }, [])

  return (
    <div id='item-list-container'>
      {
        loading?
        <div>Cargando...</div>
        :
        <ItemList productos={productos} />
      }
    </div>
  )
}
