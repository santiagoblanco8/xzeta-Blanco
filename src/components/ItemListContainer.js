import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { getArray } from './helpers/getArray';
import { array } from '../data/data';
import "./ItemListContainer.css";
import { useParams } from "react-router-dom"
import { Item } from './Item';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect(() => {
    getArray(array)
      .then(res=>{categoryId? setProductos(res.filter((productos)=> productos.category === categoryId))
        :
          setProductos(res)})
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
