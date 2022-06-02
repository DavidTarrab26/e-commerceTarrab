import React, { useState } from "react";
import ItemCount from "./ItemCount";


const ItemListContainer = ({greeting, name, msg}) => {

    const [carrito, setCarrito] = useState(0)

    const productos = [
        {prod: 'pantalon', modelo: 'chupin', talle: 's', stock: 20},
        {prod: 'pantalon', modelo: 'ancho', talle: 'm', stock: 10},
        {prod: 'remera', modelo: 'estampada', talle: 's', stock: 15},
        {prod: 'remera', modelo: 'lisa', talle: 'l', stock: 6}
    ]

    const onAdd = (cantidad) => {
        setCarrito(cantidad)
    }

    return ( 
        <>
            <div className="d-flex justify-content-center mt-5">
                {greeting + " " + name}<br/> {msg}
            </div>
            <h5 className="text-center mt-4 mb-4">Tu pedido es de {carrito} productos</h5>
            <div>
                <ItemCount listaDeProd = {productos} inicia = {1} onAdd = {onAdd}/>
            </div>
        </>
     );
}
 
export default ItemListContainer;