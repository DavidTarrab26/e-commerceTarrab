import React from "react";
import Item from "./Item";


const ItemList = ({productos}) => {
    return ( 
    <>
        {productos.length == 0 ?
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <h2 className="text-center">Loading...</h2>
        </div>
        :
        <div className="d-flex flex-wrap justify-content-between">
        {productos.map(producto =>(
            <div className="m-4 shadow" key={producto.id}>
                <Item 
                    title={producto.title} 
                    talle={producto.talle} 
                    stock={producto.stock}
                    precio={producto.precio}
                    img={producto.img}
                    id={producto.id}
                />
            </div>
        ))}
        </div>
        }
    </> 
    );
}
 
export default ItemList;