import React, { useEffect } from "react";


const ItemDetailContainer = () => {

    useEffect(()=>{
        const ItemDetail = new Promise ((res, rej)=>{
            setTimeout(()=>{
                res({id: 1, img: 'jeanChupin.jpg', title: 'Jean chupin', precio: 1500, detalle: 'jean chupin, pegado al cuerpo, un corte moderno, el largo es hasta los tobillos', talle: 's', stock: 20})
            },2000)
        })
    }, [])

    return ( 
        <div>
            <h1>detalle</h1>
        </div>
     );
}
 
export default ItemDetailContainer;