import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    
    const { id } = useParams()
    const [resultado, setResultado] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
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
            <ItemList productos={resultado} loading={loading} home={home} />
        </>
     );
}
 
export default ItemListContainer;