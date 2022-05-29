import logo from '../logo.svg';
import CartWidget from './CartWidget';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav className="navbar bg-secondary container-fluid d-flex flex-nowrap">
            <div>
                <img src={logo} alt="logo" className= 'logoNav' />
                <h2 className= 'textLogo' >Ecommerce</h2>
            </div>
            <div className="d-flex justify-content-end contBotones">
                <div>
                    <button type="button" className="btn btn-light radiusBotones">Inicio</button>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand text-black " href="#">Camisas</a>
                    <a className="navbar-brand text-black " href="#">Pantalones</a>
                    <a className="navbar-brand text-black " href="#">Shorts</a>    
                </div>
                <div>
                    <button type="button" className="btn btn-light radiusBotones">Login</button>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <CartWidget />
            </div>
        </nav>
     );
}
 
export default NavBar;