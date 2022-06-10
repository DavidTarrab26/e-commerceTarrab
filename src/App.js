import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Home/ItemListContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />}/>
          <Route exact path='/detalle/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
