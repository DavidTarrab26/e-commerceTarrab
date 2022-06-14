import React from "react";
import { Link } from "react-router-dom";
import './Item.css'


const Item = ({title, talle, stock, precio, img, id}) => {

    
    return ( 
        <>
        <div className="card text-center cardItem">
            <img src={require(`../../assets/${img}`)} className="card-img-top imgItem" alt={title}/>
            <div className="card-body bodyCard">
                <h5 className="card-title">{title}</h5>
                <Link to={`/detalle/${id}`}><button className="btn btn-dark">Ver detalle</button></Link>
                <h5 className="mt-2">${precio}</h5>
            </div>
            <p>stock: {stock}</p>
        </div>
        </>
     );
}
 
export default Item;