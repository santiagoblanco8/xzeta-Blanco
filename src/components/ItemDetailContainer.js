import React  from 'react';
import { getArray } from './helpers/getArray';
import { array } from '../data/data';
import { useState } from 'react';
import {ItemDetail} from './ItemDetail';
import { useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams} from "react-router-dom";
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer= () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {itemId} = useParams();

    useEffect( ()=>{
      const db = getFirestore();
      const itemConsultadoRef = doc(db, 'items', itemId);
      let promesaItem = new Promise((resolve, rej)=>{
          setTimeout(()=>{resolve(getDoc(itemConsultadoRef)) }, 1000)
      })
      
      promesaItem
      .then((snapshot)=>{
          setProducto({...snapshot.data(), id: snapshot.id});
      })
      .catch((error)=> {
          setError(true);
      })
      .finally(()=>{
          setLoading(false);
      })
    }, [itemId])
    
    
  return (
    <div id="item-detail-container">
        <>
      {loading && "Cargando..."}
      {error && "Ocurrio un error inesperado."}
      {producto && <ItemDetail producto={producto} />}
    </>
      </div>
  )
}
export default ItemDetailContainer
