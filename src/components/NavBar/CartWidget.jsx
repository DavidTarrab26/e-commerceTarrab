import React from "react"; 
import { useContext } from "react";
import { MiContexto } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {
    const {carrito} = useContext(MiContexto)
    return ( 
        <div className="d-flex cart-text">
            <i className="bi bi-cart"></i>
            <p>{carrito.length}</p>
        </div>
     );
}
 
export default CartWidget;