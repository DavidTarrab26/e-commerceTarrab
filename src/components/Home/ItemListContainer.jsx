import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../assets/productos";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    
    const { id } = useParams()
    const [resultado, setResultado] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingCat, setLoadingCat] = useState(false)
    const [home, setHome] = useState(true)
    
    
    const productosList = new Promise((res, rej) =>{
        res(productos);
    });
    useEffect(()=>{
            productosList
            .then((result)=>{
                if (id) {
                    setResultado(result.filter(resul => resul.category == id));
                    setLoadingCat(true)
                    setTimeout(()=>{setLoadingCat(false)},2000)
                    setHome(false)
                }else{
                    setResultado(result)
                    setLoadingCat(true)
                    setTimeout(()=>{setLoadingCat(false)},2000)
                    setHome(true)
                }
            })
            .catch((error)=>{
                setError(true);
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
        },[id]);

    return ( 
        <>
            <ItemList productos={resultado} loading={loading} loadingCat={loadingCat} home={home} />
        </>
     );
}
 
export default ItemListContainer;