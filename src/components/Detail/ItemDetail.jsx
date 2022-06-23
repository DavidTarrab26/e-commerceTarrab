import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../../context/CartContext";
import "./ItemDetail.css"


const ItemDetail = ({itemElegido, itemFiltrado}) => {
    const {addItem} = useContext(MiContexto)
    const [loading, setLoading] = useState(false)

    const cambiarLoading = () =>{
        setLoading(true)
        setTimeout(()=>{setLoading(false)},2500)
    }
    

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
            loading == true ?
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
                    <img src={require(`../../assets/${itemElegido.img}`)} className="imgDetail shadow" alt={itemElegido.title}/>
                    <div className="conTextDetail shadow">
                        <h2 className="mt-5">{itemElegido.title}</h2>
                        <p className="mt-5">{itemElegido.detalle}</p>
                        <p className="mt-5">Talles : {itemElegido.talle}</p>
                        <div className="d-flex align-items-end precioDetail">
                            <h5 >${itemElegido.precio}</h5>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button type="button" className="btn btn-dark btnComprar">Comprar Ahora</button>
                            <button type="button" className="btn btn-outline-dark" onClick={()=>addItem({...itemElegido, cantidad:1}, itemElegido.precio)}>Agregar al carrito</button>
                        </div>
                        <p className="mt-5 d-flex justify-content-end stockDetail">stock disponible :{itemElegido.stock}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="sugerencia d-flex justify-content-center">
                        <h3>Quienes vieron este producto tambien compraron</h3>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        {itemFiltrado.map(itemF => (
                            <div className="card m-3 shadow cardItemF" key={itemF.id}>
                                <img src={require(`../../assets/${itemF.img}`)} className="card-img-top cardImgF" alt={itemF.title}/>
                                <div className="card-body">
                                    <div className="titleSugerencia">
                                        <h5 className="card-title">{itemF.title}</h5>
                                        <p className="card-text">{itemF.detalle}</p>
                                    </div>
                                    <h6>${itemF.precio}</h6>
                                    <Link to={`/detalle/${itemF.id}`}><button className="btn btn-dark" onClick={()=>cambiarLoading()}>Ver mas</button></Link>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            }
        </div>
     );
}
 
export default ItemDetail;