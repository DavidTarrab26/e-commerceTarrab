import { useContext } from "react";
import { MiContexto } from "../../context/CartContext";

const Cart = () => {
    const {carrito, precios} = useContext(MiContexto)
    return ( 
        <>
        {carrito.length > 0 ?
        <>
        <div className="d-flex flex-wrap justify-content-center">
            {carrito.map(producto =>(
                <div className="shadow m-3" key={producto.id}>
                    <div className="card text-center cardItem">
                        <img src={require(`../../assets/${producto.img}`)} className="card-img-top imgItem" alt={producto.title}/>
                        <div className="card-body bodyCard">
                            <h5 className="card-title">{producto.title}</h5>
                            <h5 className="mt-2">${producto.precio}</h5>
                        </div>
                        <p>stock: {producto.stock}</p>
                    </div>
                </div>
            ))}
        </div>
        <h5>Total: ${precios}</h5>
        </>
        :
        <>
        <h3>Agrega productos al carrito</h3>
        </>
        }
        </>
     );
}
 
export default Cart;