import React  from 'react';
import { getArray } from './helpers/getArray';
import { array } from '../data/data';
import { useState } from 'react';
import {ItemDetail} from './ItemDetail';
import { useEffect } from 'react';
import './ItemDetailContainer.css';

const ItemDetailContainer= () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getArray(array)
            .then(res=>{
              const item = res.find((item)=> item.id === 1)
              setProducto(item)
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    }, [])
    
    
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
