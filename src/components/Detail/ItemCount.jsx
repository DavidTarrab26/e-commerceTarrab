import React, { useEffect, useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1)

    useEffect(() => {
        if (stock == count){
            alert(`no hay mas stock, solo quedan ${stock}.`)
        }
    },[count])

    return ( 
        <>
            <h6>Cantidad:</h6>
            <div className="d-flex justify-content-center">
                <div className="itemCount d-flex justify-content-center contenedor">
                    {
                        count !== 0? 
                        <button className="btn btn-outline-primary" onClick={()=>{setCount(count -1)}}>-</button>
                        :
                        <button className="btn btn-outline-primary" disabled="disabled">-</button>
                    }
                    <h4 className="prodInicial">{count}</h4>
                    {count !== stock ? 
                    <button className="btn btn-outline-primary" onClick={()=>{setCount(count +1)}}>+</button>
                    :
                    <button className="btn btn-outline-primary" disabled="disabled">+</button>
                    }
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-dark mt-3" onClick={()=>{onAdd(count)}}>Agregar cantidad</button>
            </div>
        </>
     );
}
 
export default ItemCount;