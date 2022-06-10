import React from "react";
import { Link } from "react-router-dom";
import './Item.css'


const Item = ({title, talle, stock, precio, img, id}) => {

    
    return ( 
        <>
        <div className="card text-center cardItem">
            <img src={require(`../../assets/${img}`)} className="card-img-top imgItem" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">talle: {talle}</p>
                <Link to={`detalle/${id}`} className="btn btn-primary">Ver detalle</Link>
                <h5 className="mt-2">${precio}</h5>
            </div>
            <p>stock: {stock}</p>
        </div>
        </>
     );
}
 
export default Item;