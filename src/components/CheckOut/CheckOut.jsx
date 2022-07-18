import { useContext, useState } from "react"
import { MiContexto } from "../../context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import "./CheckOut.css"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


const CheckOut = () => {

    const {carrito, setCarrito, precioTotal, toastFinal} = useContext(MiContexto)
    const { register, formState: { errors } ,handleSubmit } = useForm() 
    const [finalizada, setFinalizada] = useState(false)
    const [nID, setNID] = useState(undefined)

    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    const onSubmit = (buyer) =>{
        const order = {
            buyer,
            items: carrito,
            total: precioTotal()
        }
        addDoc(orderCollection, order).then(({id})=>setNID(id))
        setCarrito([])
        setFinalizada(true)
        toastFinal()
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
                    <form className="row formControl" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-4">
                            <label >Nombre</label>
                            <input type="text" className="form-control" {...register("nombre", {
                                required: true,
                                maxLength: 15
                            })}/>
                            {errors.nombre?.type === "required" && <p className="text-danger">El campo nombre es obligatorio</p>}
                        </div>
                        <div className="col-md-4">
                            <label >Apellido</label>
                            <input type="text" className="form-control" {...register("apellido", {
                                required: true,
                                maxLength: 20
                            })}/>
                            {errors.apellido?.type === "required" && <p className="text-danger">El campo apellido es obligatorio</p>}
                        </div>
                        <div className="col-md-4">
                            <label>Email</label>
                            <input type="email" className="form-control" {...register("email", {
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })}/>
                            {errors.email?.type === "pattern" && <p className="text-danger">El formato del email es incorrecto</p>}
                        </div>
                        <div className="col-md-6">
                            <label >Ciudad</label>
                            <input type="text" className="form-control" {...register("ciudad", {
                                required: true
                            })}/>
                            {errors.ciudad?.type === "required" && <p className="text-danger">El campo ciudad es obligatorio</p>}
                        </div>
                        <div className="col-md-3">
                            <label>Codigo Postal</label>
                            <input type="number" className="form-control" {...register("cp", {
                                required: true,
                                maxLength: 15
                            })}/>
                            {errors.cp?.type === "required" && <p className="text-danger">El campo codigo postal es obligatorio</p>}
                        </div>
                        <div className="col-12 mt-4">
                            <button className="btn btn-dark" type="submit" >Terminar Compra</button>
                        </div>
                    </form>
                </div>
                </>
            }
        </div>
     );
}
 
export default CheckOut;