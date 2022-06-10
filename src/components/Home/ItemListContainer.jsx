import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../assets/productos";
import ItemList from "./ItemList";
/* import ItemCount from "../ItemCount"; */


const ItemListContainer = () => {
    
    //Desafio clase 5
    /* const [carrito, setCarrito] = useState(0)

    const producto = [
        {prod: 'pantalon', modelo: 'chupin', talle: 's', stock: 20},
    ]

    const onAdd = (cantidad) => {
        setCarrito(cantidad)
    } */

    //Desafio clase 6
    const { id } = useParams()
    const [resultado, setResultado] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    
    const productosList = new Promise((res, rej) =>{
        setTimeout(()=>{
            res(productos);
        }, 2000);
    });
    useEffect(()=>{
            productosList
            .then((result)=>{
                if (id) {
                    setResultado(result.filter(resul => resul.category == id));
                }else{
                    setResultado(result)
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
            <ItemList productos={resultado} error={error} loading={loading} />
            {/* <h5 className="text-center mt-4 mb-4">Tu pedido es de {carrito} producto</h5>
            <div>
                <ItemCount listaDeProd = {producto} inicia = {1} onAdd = {onAdd}/>
            </div> */}
        </>
     );
}
 
export default ItemListContainer;