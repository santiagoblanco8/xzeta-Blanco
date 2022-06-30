import React  from 'react';
import { getArray } from './helpers/getArray';
import { array } from '../data/data';
import { useState } from 'react';
import {ItemDetail} from './ItemDetail';
import { useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams} from "react-router-dom"

const ItemDetailContainer= () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        getArray(array)
            .then(res=>{
              const item = res.find((item)=> item.id === Number(itemId))
              setProducto(item)
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    }, [itemId])
    
    
  return (
    <div id="item-detail-container">{
      loading?
      <div>Cargando...</div>
      :
      <ItemDetail producto={producto} />
    }
      </div>
  )
}
export default ItemDetailContainer
