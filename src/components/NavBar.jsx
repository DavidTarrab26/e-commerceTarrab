import logo from '../logo.svg';

const NavBar = () => {
    return ( 
        <nav className="navbar bg-secondary container-fluid">
            <div>
                <img src={logo} alt="logo" style={{width: '20%'}} />
                <h2 style={{fontSize: '10px', marginLeft: '5px'}}>Ecommerce</h2>
            </div>
            <div className="d-flex justify-content-end" style={{width: '70%', marginRight: '10%'}}>
                <div>
                    <button type="button" className="btn btn-light" style={{borderRadius: '10px'}}>Inicio</button>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand text-black " href="#">Camisas</a>
                    <a className="navbar-brand text-black " href="#">Pantalones</a>
                    <a className="navbar-brand text-black " href="#">Shorts</a>    
                </div>
                <div>
                    <button type="button" className="btn btn-light" style={{borderRadius: '10px'}}>Login</button>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;