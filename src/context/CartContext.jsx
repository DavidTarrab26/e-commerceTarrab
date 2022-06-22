import { createContext, useState } from "react";

export const MiContexto = createContext({})


const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [precios, setPrecios] = useState(0)
    
    const onAdd = (item, precio) =>{
        setCarrito([item, ...carrito])
        setPrecios(precio + precios)
    }

    const remove = (id) =>{
        setCarrito(carrito.filter(car=>car.id !== id))
    }

    const clear = () =>{
        setCarrito([])
    }

    const isInCart = () =>{
        
    }

    return ( 
        <MiContexto.Provider value={{carrito, precios, onAdd, remove, clear}}>
            {children}
        </MiContexto.Provider>
     );
}
 
export default CartContext;