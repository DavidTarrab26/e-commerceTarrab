import { useContext } from "react";
import { MiContexto } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import "./Cart.css"

const Cart = () => {
    const {carrito, precios, remove, clear} = useContext(MiContexto)
    return ( 
        <>
            {carrito.length > 0 ?
            <div>
                <div className="d-flex flex-wrap justify-content-center">
                    {carrito.map(producto =>(
                        <div className="shadow m-3" key={producto.id}>
                            <div className="card text-center cardItem">
                                <img src={require(`../../assets/${producto.img}`)} className="card-img-top imgItem" alt={producto.title}/>
                                <div className="card-body bodyCard">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <h5 className="mt-2">${producto.precio}</h5>
                                </div>
                                <div>
                                    <ItemCount stock={producto.stock} cantidad={producto.cantidad}/>
                                    <button type="button" className="btn btn-danger m-4" onClick={()=>remove(producto.precio, producto.id)}>Eliminar Producto</button>
                                </div>
                                <p>stock: {producto.stock}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center"> 
                    <h5>Total: ${precios}</h5>
                    <button type="button" className="btn btn-success">Comprar</button>
                    <button type="button" className="btn btn-danger" onClick={()=>clear()}>Eliminar Todo!</button>
                </div>
            </div>
            :
            <div>
                <h3>Agrega productos al carrito</h3>
            </div>
            }
        </>
     );
}
 
export default Cart;