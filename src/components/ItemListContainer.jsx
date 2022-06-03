import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = ({}) => {

    //Desafio clase 5
    const [carrito, setCarrito] = useState(0)

    const producto = [
        {prod: 'pantalon', modelo: 'chupin', talle: 's', stock: 20},
    ]

    const onAdd = (cantidad) => {
        setCarrito(cantidad)
    }

    //Desafio clase 6
    const [resultado, setResultado] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const productosList = new Promise((res, rej) =>{
            setTimeout(()=>{
                res([
                    {id: 1, img: 'jeanChupin.jpg', title: 'Jean chupin', precio: 1500, detalle: 'jean chupin, pegado al cuerpo, un corte moderno, el largo es hasta los tobillos', talle: 's', stock: 20},
                    {id: 2, img: 'jeanChupin.jpg', title: 'Jean ancho', precio: 2500, detalle: 'jean ancho abajo, el corte se va abriendo a medida', talle: 'm', stock: 17},
                    {id: 3, img: 'jeanChupin.jpg', title: 'Jean corto', precio: 1700, detalle: 'jean corto, una bermuda clasica de jean, excelente para el verano y elegante', talle: 'l', stock: 25},
                    {id: 4, img: 'jeanChupin.jpg', title: 'Jean sin bolsillos', precio: 1200, detalle: 'jean chupin sin bolsillos traseros, un estilo nuevo y unico', talle: 's', stock: 15},
                    {id: 5, img: 'jeanChupin.jpg', title: 'Jean cortado', precio: 2300, detalle: 'jean chupin cortado en las rodillas, corte moderno y muy lindo visualmente', talle: 's', stock: 6},
                    {id: 6, img: 'jeanChupin.jpg', title: 'Jean sin costuras', precio: 1500, detalle: 'jean ancho sin costuras en sus terminaciones de los tobillos', talle: 'm', stock: 2},
                    {id: 7, img: 'jeanChupin.jpg', title: 'Jean con botones', precio: 2500, detalle: 'jean chupin con botones', talle: 'm', stock: 23},
                    {id: 8, img: 'jeanChupin.jpg', title: 'Jean con botones dorados', precio: 2500, detalle: 'jean chupin con botones dorados', talle: 'xl', stock: 14}
                ]);
            }, 2000);
        });

        productosList
            .then((result)=>{
                setResultado(result);
            })
            .catch((error)=>{
                setError(true);
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[]);



    return ( 
        <>
            <ItemList productos={resultado} error={error} loading={loading} />
            <h5 className="text-center mt-4 mb-4">Tu pedido es de {carrito} producto</h5>
            <div>
                <ItemCount listaDeProd = {producto} inicia = {1} onAdd = {onAdd}/>
            </div>
        </>
     );
}
 
export default ItemListContainer;