import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Home/ItemListContainer';
import CartContext from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <CartContext>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/category/:id' element={<ItemListContainer />}/>
            <Route exact path='/detalle/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

export default App;
