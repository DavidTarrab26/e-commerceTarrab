import { useContext, useState } from "react"
import { MiContexto } from "../../context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import "./CheckOut.css"
import { Link } from "react-router-dom"


const CheckOut = () => {
    
    const {carrito, setCarrito, precios, setPrecios, setCantidadTotal} = useContext(MiContexto)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [cp, setCp] = useState("")
    const [finalizada, setFinalizada] = useState(false)
    const [formIncompleto, setFormIncompleto] = useState (false)
    const [nID, setNID] = useState(undefined)

    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    const enviarPedido = () => {
        if(nombre == ""){
            setFormIncompleto(true)
        }else{
            const order = {
                buyer: {nombre, apellido, email, ciudad, cp},
                items: carrito,
                total: precios
            }
            addDoc(orderCollection, order).then(({id})=>setNID(id))
            setCarrito([])
            setCantidadTotal(0)
            setPrecios(0)
            setFinalizada(true)
            setFormIncompleto(false)
        }
    }

    return ( 
        <div>
            {
                finalizada ? 
                <div className="text-center mt-4">
                    <h1>Compra realizada con exito</h1>
                    <h4>Su orden de compra es: {nID}</h4>
                    <p>En instantes le llegara un mail con mas informacion, Muchas Gracias!</p>
                    <Link to={"/"}><button className="btn btn-dark">volver al home</button></Link>
                </div>
                :
                <>
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
                        {
                            formIncompleto? 
                                <h3 className="text-danger">Formulario incompleto</h3>
                            :
                                ""
                        }
                        <div className="col-12 mt-4">
                            <button className="btn btn-dark" onClick={enviarPedido}>Terminar Compra</button>
                        </div>
                    </div>
                </div>
                </>
            }
        </div>
     );
}
 
export default CheckOut;