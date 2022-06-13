import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import CartWidget from '../CartWidget';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav className="navbar nav container-fluid d-flex flex-nowrap">
            <div>
                <Link to={'/'}><img src={logo} alt="logo" className= 'logoNav' /></Link>
                <h2 className= 'textLogo' >Ecommerce</h2>
            </div>
            <div className="d-flex justify-content-end contBotones">
                <div>
                    <Link to={'/'}><button className="btn btn-dark radiusBotones">Home</button></Link>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <Link className="navbar-brand text-black " to={'/category/remeras'}>Remeras</Link>
                    <Link className="navbar-brand text-black " to={'/category/pantalones'}>Pantalones</Link>
                    <Link className="navbar-brand text-black " to={'/category/camisas'}>Camisas</Link>    
                </div>
                <div>
                    <button type="button" className="btn btn-dark radiusBotones">Login</button>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <CartWidget />
            </div>
        </nav>
     );
}
 
export default NavBar;