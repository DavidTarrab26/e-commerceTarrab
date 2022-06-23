import { createContext, useState } from "react";

export const MiContexto = createContext({})


const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [precios, setPrecios] = useState(0)
    
    const addItem = (item, precio) =>{
        const index = carrito.findIndex(prod =>prod.id === item.id)
        if(index > -1){
            let cantidadVieja = carrito[index].cantidad
            carrito[index].cantidad = cantidadVieja + 1
            setCarrito([...carrito])
        } else{
            setCarrito([item, ...carrito])
        }
        setPrecios(precio + precios)
        alert("se agrego el item al carrito")
    }

    const remove = (precio, id) =>{
        setCarrito(carrito.filter(car=>car.id !== id))
        setPrecios(precios - precio)
    }

    const clear = () =>{
        setCarrito([])
        setPrecios(0)
    }

    return ( 
        <MiContexto.Provider value={{carrito, precios, addItem, remove, clear}}>
            {children}
        </MiContexto.Provider>
     );
}
 
export default CartContext;