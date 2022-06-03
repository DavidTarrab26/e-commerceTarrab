import React from "react";


const Item = ({id, title, talle, stock, img}) => {
    return ( 
        <>
        <div className="card text-center" style={{width: '18rem'}}>
            <img src={require(`../assets/${img}`)} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">talle: {talle}</p>
                <a href="#" className="btn btn-primary">Ver detalle</a>
            </div>
            <p>stock: {stock}</p>
        </div>
        </>
     );
}
 
export default Item;