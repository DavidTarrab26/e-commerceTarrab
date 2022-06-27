import React, { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, cantidad}) => {

    useEffect(() => {
        if (stock == cantidad){
            alert(`no hay mas stock, solo quedan ${stock}.`)
        }
    },[cantidad])

    return ( 
        <>
            <h6>Cantidad:</h6>
            <div className="d-flex justify-content-center">
                <div className="itemCount d-flex justify-content-center contenedor">
                    {/* {
                        count !== 0? 
                        <button className="btn btn-outline-primary" onClick={()=>{setCount(cantidad -1)}}>-</button>
                        :
                        <button className="btn btn-outline-primary" disabled="disabled">-</button>
                    } */}
                    <h4 className="prodInicial">{cantidad}</h4>
                    {/* {count !== stock ? 
                    <button className="btn btn-outline-primary" onClick={()=>{setCount(count +1)}}>+</button>
                    :
                    <button className="btn btn-outline-primary" disabled="disabled">+</button>
                    } */}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {/* <button className="btn btn-success mt-3" onClick={()=>{onAdd()}}>Agregar cantidad</button> */}
            </div>
        </>
     );
}
 
export default ItemCount;