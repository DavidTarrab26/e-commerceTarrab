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
                <div className="d-flex">
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
                        <button className="btn btn-dark">VER MAS</button>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
            {productos.map(producto =>(
                <div className="m-4 shadow" key={producto.id}>
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
        :
        <div className="d-flex flex-wrap justify-content-between">
            {productos.map(producto =>(
                <div className="m-4 shadow" key={producto.id}>
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
        }
    </> 
    );
}
 
export default ItemList;