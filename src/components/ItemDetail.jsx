import React, { useEffect, useState } from "react";
import "./ItemDetail.css"


const ItemDetail = ({item}) => {
    
    const [itemElegido, setItemElegido] = useState()

    useEffect(()=>{
        setItemElegido(item.find(item1 => item1.id === 1))
    },[item])
    

    return ( 
        <div>
            {itemElegido === undefined? 
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <h2 className="text-center">Loading...</h2>
            </div>
            : 
            <div>
                <div className="d-flex justify-content-center contenedorDetail">
                    <img src={require(`../assets/${itemElegido.img}`)} className="imgDetail shadow" alt={itemElegido.title}/>
                    <div className="conTextDetail shadow">
                        <h2 className="mt-5">{itemElegido.title}</h2>
                        <p className="mt-5">{itemElegido.detalle}</p>
                        <p className="mt-5">Talles : {itemElegido.talle}</p>
                        <div className="d-flex align-items-end precioDetail">
                            <h5 >${itemElegido.precio}</h5>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-primary btnComprar">Comprar Ahora</button>
                            <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>
                        </div>
                        <p className="mt-5 d-flex justify-content-end stockDetail">stock disponible :{itemElegido.stock}</p>
                    </div>
                </div>
            </div>
            }
            {/*  */}
        </div>
     );
}
 
export default ItemDetail;