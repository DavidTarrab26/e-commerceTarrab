import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../assets/productos";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
    
    const { id } = useParams()
    const [resultado, setResultado] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingCat, setLoadingCat] = useState(false)
    const [home, setHome] = useState(true)
    
    
    useEffect(()=>{
        const db = getFirestore()

        const productosCollection = collection(db, 'productos')

        if (id) {
            const q = query(productosCollection, where('category', '==', id))
            getDocs(q).then(snapshot=>{
                setResultado(snapshot.docs.map(doc=>({...doc.data(), id: doc.id})))
            })
            .catch(error=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
                setHome(false)
            })
        }else{
            getDocs(productosCollection).then(snapshot=>{
                setResultado(snapshot.docs.map(doc=>({...doc.data(), id: doc.id})))
            })
            .catch(error=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
                setHome(true)
            })
        }
            
        },[id]);

    return ( 
        <>
            <ItemList productos={resultado} loading={loading} loadingCat={loadingCat} home={home} />
        </>
     );
}
 
export default ItemListContainer;