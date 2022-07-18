import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"


const ItemDetail = ({itemElegido, loading}) => {
    const {addItem} = useContext(MiContexto)
    const [itemSugerido, setItemSugerido] = useState([])
    const [loadingMas, setLoadingMas] = useState(false)

    const onAdd = (count) =>{
        addItem({...itemElegido, cantidad: count})
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoadingMas(false)
        },1000)
    },[loadingMas])

    useEffect(()=>{
        const db = getFirestore()
        const category = itemElegido.category

        const productosCollection = collection(db, 'productos')
        if(category){
            const q = query(productosCollection, where('category', '==', category))
            getDocs(q).then(snapshot=>{
                setItemSugerido(snapshot.docs.map(doc=>({...doc.data(), id: doc.id})))
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },[itemElegido])

    return ( 
        <div>
            {loading || loadingMas == true ?
                <div>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <h2 className="text-center">Loading...</h2>
                </div>
                :
                <div>
                    <div className="contenedorDetail">
                        <img src={itemElegido.img} className="imgDetail shadow" alt={itemElegido.title}/>
                        <div className="conTextDetail shadow">
                            <h2 className="mt-5">{itemElegido.title}</h2>
                            <p className="mt-5">{itemElegido.detalle}</p>
                            <p className="mt-5">Talles : {itemElegido.talle}</p>
                            <div className="d-flex align-items-end precioDetail">
                                <h5 >${itemElegido.precio}</h5>
                            </div>
                            <div>
                                <div className="contBotonDetail">
                                    <ItemCount stock={itemElegido.stock} onAdd={onAdd} />
                                </div>
                                <p className="d-flex justify-content-end stockDetail">stock disponible :{itemElegido.stock}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="sugerencia d-flex justify-content-center">
                            <h3>Quienes vieron este producto tambien compraron</h3>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            {itemSugerido?.map(itemF => (
                                <div className="card m-3 shadow cardItemF" key={itemF.id}>
                                    <img src={itemF.img} className="card-img-top cardImgF" alt={itemF.title}/>
                                    <div className="card-body">
                                        <div className="titleSugerencia">
                                            <h5 className="card-title">{itemF.title}</h5>
                                            <p className="card-text">{itemF.detalle}</p>
                                        </div>
                                        <h6>${itemF.precio}</h6>
                                        <Link to={`/detalle/${itemF.id}`}><button className="btn btn-dark" onClick={()=>setLoadingMas(true)}>Ver mas</button></Link>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default ItemDetail;