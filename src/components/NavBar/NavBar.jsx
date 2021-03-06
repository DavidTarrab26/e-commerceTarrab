import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../../context/CartContext";
import logo from '../../fotologojpg.jpg';
import CartWidget from './CartWidget';
import './NavBar.css'

const NavBar = () => {
    const {carrito} = useContext(MiContexto)

    return ( 
        <>
        <nav className="navbar navbar-expand-lg nav shadow">
            <div className="container-fluid">
                <div>
                    <Link to={'/'}><img src={logo} alt="logo" className= 'logoNav' /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button> 
                <div className="collapse navbar-collapse contText" id="navbarNav">
                    <ul className="navbar-nav contBotones">
                        <li className="nav-item">
                            <Link to={'/'} className="navbar-brand boton">Home</Link>
                        </li>
                        <div className="container-fluid contLiNormal">
                            <li className="nav-item">
                                <Link className="navbar-brand text-black textNav" to={'/category/remeras'}>Remeras</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand text-black textNav" to={'/category/pantalones'}>Pantalones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand text-black textNav" to={'/category/camisas'}>Camisas</Link>
                            </li>
                        </div>
                        <li className="nav-item">
                            <Link to={'/'} className="navbar-brand boton">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {carrito.length > 0 ?
            <div className="d-flex justify-content-end">
                <Link className="text-black" to={'/cart'}><CartWidget /></Link>
            </div>
            :
            ""
            }
        </nav>
        </>
     );
}
 
export default NavBar;