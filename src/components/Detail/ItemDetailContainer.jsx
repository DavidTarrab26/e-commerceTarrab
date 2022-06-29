import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../assets/productos";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [itemElegido, setItemElegido] = useState([])
    const [itemFiltrado, setItemFiltrado] = useState([])


    useEffect(()=>{
        const db = getFirestore()

        const productRef = doc(db, 'producto', id)
        console.log(id)

        getDoc(productRef)
        .then(snapshot=>{
            setItemElegido({ ...snapshot.data(), id: snapshot.id })
        })
        .catch(error=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[id]);
    
    return ( 
        <div>
           <ItemDetail itemElegido ={itemElegido} itemFiltrado={itemFiltrado} />
        </div>
     );
}
 
export default ItemDetailContainer;