import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import ItemListContainer from './components/Home/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:params' element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
