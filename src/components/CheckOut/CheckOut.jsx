import { useContext, useState } from "react"
import { MiContexto } from "../../context/CartContext"
import "./CheckOut.css"


const CheckOut = () => {
    
    const {carrito, setCarrito} = useContext(MiContexto)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [cp, setCp] = useState("")

    const enviarPedido = () => {
        console.log(nombre, apellido, email, ciudad, cp, carrito)
        setCarrito([])
    }

    return ( 
        <div>
            <div className="text-center mt-5">
                <h5>Complete el formulario para terminar su compra</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row formControl">
                    <div className="col-md-4">
                        <label >Nombre</label>
                        <input type="text" className="form-control"onChange={(e)=> setNombre(e.target.value)} required/>
                    </div>
                    <div className="col-md-4">
                        <label >Apellido</label>
                        <input type="text" className="form-control"onChange={(e)=> setApellido(e.target.value)} required/>
                    </div>
                    <div className="col-md-4">
                        <label>Email</label>
                        <input type="email" className="form-control"onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label >Ciudad</label>
                        <input type="text" className="form-control"onChange={(e)=> setCiudad(e.target.value)}  required/>
                    </div>
                    <div className="col-md-3">
                        <label>Codigo Postal</label>
                        <input type="number" className="form-control"onChange={(e)=> setCp(e.target.value)}/>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={enviarPedido}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CheckOut;