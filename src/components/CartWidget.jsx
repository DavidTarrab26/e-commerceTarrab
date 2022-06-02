import React from "react"; 
import './CartWidget.css'

const CartWidget = () => {
    return ( 
        <div className="d-flex cart-text">
            <i className="bi bi-cart"></i>
            <p>2</p>
        </div>
     );
}
 
export default CartWidget;