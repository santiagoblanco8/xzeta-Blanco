import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { getArray } from './helpers/getArray';
import { array } from '../data/data';
import "./ItemListContainer.css";
import { useParams } from "react-router-dom"
import { Item } from './Item';
import {collection, where, getDocs, getFirestore, query} from 'firebase/firestore'

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const {categoryId} = useParams();
  
  useEffect(() =>{
    const db = getFirestore();
    const collectionRef = collection(db, 'items');
     
    if (!categoryId){
      let collectionFound = new Promise((res, rej)=>{
        setTimeout(()=>{res(getDocs(collectionRef))}, 1000)
      })

      collectionFound
      .then((res)=> {
        const arrNormalizado = res.docs.map((item)=>({...item.data(), id: item.id}));
        setProductos(arrNormalizado);
      })
      .catch((error)=>{
        setError(true);
      })
    .finally(()=>{
      setLoading(false);
    })
    } else{
      const collectionFiltrada = query(collectionRef, where('category', '==', categoryId));
      let arrayFiltrado = new Promise((resolve, reject)=>{
        setTimeout(()=>{ resolve(getDocs(collectionFiltrada))}, 1000)
      })

      arrayFiltrado.then((res)=> {
        const arrNormalizado = res.docs.map((item)=>({...item.data(), id: item.id}));
        setProductos(arrNormalizado);
      })
      .catch((error)=>{
        setError(true);
      })
      .finally(()=>{
        setLoading(false);
      })
    }
  }, [categoryId]);



  return (
    <div id='item-list-container'>
     <>
     {loading && "Cargando..."}
     {error && "Ocurrio un error inesperado."}
     {productos && <ItemList productos={productos}/>}
     </>
     </div>
  )
}
