import { createContext, useState } from "react";

export const MiContexto = createContext({})


const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [precios, setPrecios] = useState(0)
    
    const onAdd = (item, precio) =>{
        setCarrito([item, ...carrito])
        setPrecios(precio + precios)
    }

    return ( 
        <MiContexto.Provider value={{carrito, precios, onAdd}}>
            {children}
        </MiContexto.Provider>
     );
}
 
export default CartContext;