import React from "react"; 
import { useContext } from "react";
import { MiContexto } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(MiContexto)
    return ( 
        <div className="d-flex cart-text">
            <i className="bi bi-cart"></i>
            <p>{cantidadTotal}</p>
        </div>
     );
}
 
export default CartWidget;