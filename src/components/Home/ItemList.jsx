import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import './ItemList.css';
import fotoSlide from '../../assets/remeraSlide.png'


const ItemList = ({productos, loading, loadingCat, home}) => {


    return ( 
    <>
        {loading || loadingCat == true?
        <div>
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <h2 className="text-center">Loading...</h2>
        </div>
        :
        home == true ?
        <div>
            <div className="container-fluid slide">
                <div className="d-flex justify-content-center">
                    <div className="contTextSlide">
                    <h3 className="textSlide text-center">TARRAB</h3>
                    <h3 className="textSlide">E-COMMERCE</h3>
                    </div>
                    <img src={fotoSlide} className="ftoSlide" />
                    <div className="text-center contTextNew">
                        <h4>NEW ARRIVALS</h4>
                        <p>100% Algodon</p>
                        <p>Excelente calidad</p>
                        <p>Increibles diseños</p>
                        <Link to={'/category/remeras'}><button className="btn btn-dark">VER MAS</button></Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex justify-content-center ">
                    <h3 className="text-center titleProd">TODOS NUESTROS PRODUCTOS</h3>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    {productos.map(producto =>(
                        <div className="shadow m-3" key={producto.id}>
                            <Item 
                                title={producto.title} 
                                talle={producto.talle} 
                                stock={producto.stock}
                                precio={producto.precio}
                                img={producto.img}
                                id={producto.id}
                            />
                        </div>
                    ))}
                </div>    
            </div>
        </div>
        :
        <div className="container">
            <div className="d-flex justify-content-center">
                <h3 className="text-center titleCate">{productos[0].category}</h3>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {productos.map(producto =>(
                    <div className="m-3 shadow" key={producto.id}>
                        <Item 
                            title={producto.title} 
                            talle={producto.talle} 
                            stock={producto.stock}
                            precio={producto.precio}
                            img={producto.img}
                            id={producto.id}
                        />
                    </div>
                ))}
            </div>
        </div>
        }
    </> 
    );
}
 
export default ItemList;