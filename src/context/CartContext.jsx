import { createContext, useState } from "react";

export const MiContexto = createContext({})


const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [precios, setPrecios] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [precioDelItem, setPrecioDelItem] = useState(0)
    console.log(carrito)
    
    const addItem = (item, precio) =>{
        const index = carrito.findIndex(prod =>prod.id === item.id)
        console.log(index)
        if(index > -1){
            let cantidadVieja = carrito[index].cantidad
            carrito[index].cantidad = cantidadVieja + 1
            setCarrito([...carrito])
        } else{
            setCarrito([item, ...carrito])
        }
        setCantidadTotal(cantidadTotal + 1)
        setPrecios(precio + precios)
        alert("se agrego el item al carrito")
    }

    const remove = (precio, id, cantidad) =>{
        setCarrito(carrito.filter(car=>car.id !== id))
        setCantidadTotal(cantidadTotal - cantidad)
        setPrecioDelItem(precio * cantidad)
        setPrecios(precios - precioDelItem)
    }

    const clear = () =>{
        setCarrito([])
        setPrecios(0)
        setCantidadTotal(0)
    }

    return ( 
        <MiContexto.Provider value={{carrito, precios, cantidadTotal, precioDelItem, addItem, remove, clear}}>
            {children}
        </MiContexto.Provider>
     );
}
 
export default CartContext;