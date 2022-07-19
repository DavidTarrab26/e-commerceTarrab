import { useEffect } from "react";
import { createContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export const MiContexto = createContext({})


const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    console.log(carrito)

    /* useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito]) */

    const addItem = (item) =>{
        const index = carrito.findIndex(prod =>prod.id === item.id)
        if(index > -1){
            let cantidadVieja = carrito[index].cantidad
            carrito[index].cantidad = cantidadVieja + item.cantidad
            setCarrito([...carrito])
        } else{
            setCarrito([...carrito, item])
        }
        toast.success("Se agrego a tu carrito")
    }
    const precioTotal =()=>{
        return carrito.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
    }
    const cantidadTotal =()=>{
        return carrito.reduce((acum, prod) => acum + (prod.cantidad) , 0)
    }
    const toastFinal = ()=>{
        toast.success("Su comprado ah sido realizada con exito!")
    }
    
    
    const remove = (id) =>{
        setCarrito(carrito.filter(prod=> prod.id !== id))
        toast.success("Se elimino el producto de tu carrito")
    }

    const clear = () =>{
        setCarrito([])
        toast.success("Se eliminaron todos los productos de tu carrito")
    }

    return ( 
        <MiContexto.Provider value={{carrito, cantidadTotal, addItem, remove, clear, setCarrito, precioTotal, cantidadTotal, toastFinal}}>
            <div><Toaster/></div>
            {children}
        </MiContexto.Provider>
     );
}
 
export default CartContext;