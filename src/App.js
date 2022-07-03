import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import CheckOut from "./components/CheckOut/CheckOut";
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import ItemListContainer from './components/Home/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartContext from './context/CartContext';


function App() {
  
  initializeApp({
    apiKey: "AIzaSyAICJgLKllfaHqGZ4GdG8XlH2fbjG0bdF0",
    authDomain: "tarrabecommerce.firebaseapp.com",
    projectId: "tarrabecommerce",
    storageBucket: "tarrabecommerce.appspot.com",
    messagingSenderId: "848924766620",
    appId: "1:848924766620:web:849a3307f7840ae3029859"
  });

  return (
    <CartContext>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<CheckOut />} />
            <Route exact path='/category/:id' element={<ItemListContainer />}/>
            <Route exact path='/detalle/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

export default App;
