import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [resultado, setResultado] = useState([])
    const [item, setItem] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const itemDetail = new Promise((res, rej) =>{
            setTimeout(()=>{
                res([
                    {id: 1, img: 'jeanChupin.jpg', title: 'Jean chupin', precio: 1500, detalle: 'Jean chupin, pegado al cuerpo, un corte moderno, el largo es hasta los tobillos', talle: 'S', stock: 20},
                    {id: 2, img: 'jeanAncho.jpg', title: 'Jean ancho', precio: 2500, detalle: 'Jean ancho abajo, el corte se va abriendo a medida', talle: 'M', stock: 17},
                    {id: 3, img: 'jeanCorto.jpg', title: 'Jean corto', precio: 1700, detalle: 'Jean corto, una bermuda clasica de jean, excelente para el verano y elegante', talle: 'L', stock: 25},
                    {id: 4, img: 'jeanChupin.jpg', title: 'Jean sin bolsillos', precio: 1200, detalle: 'Jean chupin sin bolsillos traseros, un estilo nuevo y unico', talle: 'XS', stock: 15},
                    {id: 5, img: 'jeanCortado.jpg', title: 'Jean cortado', precio: 2300, detalle: 'Jean chupin cortado en las rodillas, corte moderno y muy lindo visualmente', talle: 'S', stock: 6},
                    {id: 6, img: 'jeanSinCostura.jpg', title: 'Jean sin costuras', precio: 1500, detalle: 'Jean ancho sin costuras en sus terminaciones de los tobillos', talle: 'M', stock: 2},
                    {id: 7, img: 'jeanBotones.jpg', title: 'Jean con botones', precio: 2500, detalle: 'Jean chupin con botones', talle: 'M', stock: 23},
                    {id: 8, img: 'jeanBotonesDorados.jpg', title: 'Jean con botones dorados', precio: 2500, detalle: 'Jean chupin con botones dorados', talle: 'XL', stock: 14}
                ]);
            }, 2000);
        });

        itemDetail
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
        <div>
           <ItemDetail items ={resultado}/>
        </div>
     );
}
 
export default ItemDetailContainer;