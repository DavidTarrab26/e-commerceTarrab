import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../assets/productos";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [itemElegido, setItemElegido] = useState()
    const [itemFiltrado, setItemFiltrado] = useState([])


    useEffect(()=>{
        const itemDetail = new Promise((res, rej) =>{
            setTimeout(()=>{
                res(productos);
            }, 2000);
        });

        itemDetail
            .then((result)=>{
                setItemElegido(result.find(item => item.id == id))
                //ver esta linea dps
                setItemFiltrado(result.filter(item => item.id != id));
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
        <div>
           <ItemDetail itemElegido ={itemElegido} itemFiltrado={itemFiltrado} />
        </div>
     );
}
 
export default ItemDetailContainer;