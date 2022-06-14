import React, { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({listaDeProd, inicia, onAdd}) => {
    
    const stock = listaDeProd.stock
    const [count, setCount] = useState(inicia)
    
    useEffect(() => {
        if (stock == count){
            alert(`no hay mas stock, solo quedan ${count}.`)
        }
    },[count])
    //Desafio clase 5
    /* const [carrito, setCarrito] = useState(0)

    const producto = [
        {prod: 'pantalon', modelo: 'chupin', talle: 's', stock: 20},
    ]

    const onAdd = (cantidad) => {
        setCarrito(cantidad)
    } */

    

    return ( 
        <>
            <div className="d-flex justify-content-center">
                <div className="itemCount d-flex justify-content-center contenedor">
                    {
                    count !== inicia? 
                    <button className="btn btn-outline-primary" onClick={()=>{setCount(count -1)}}>-</button>
                        :
                    <button className="btn btn-outline-primary" disabled="disabled">-</button>
                    }
                    <h2 className="prodInicial">{count}</h2>
                    {count !== stock ? 
                    <button className="btn btn-outline-primary" onClick={()=>{setCount(count +1)}}>+</button>
                    :
                    <button className="btn btn-outline-primary" disabled="disabled">+</button>
                    }
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success mt-3" onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
            </div>
            {/* <h5 className="text-center mt-4 mb-4">Tu pedido es de {carrito} producto</h5>
            <div>
                <ItemCount listaDeProd = {producto} inicia = {1} onAdd = {onAdd}/>
            </div> */}
        </>
     );
}
 
export default ItemCount;