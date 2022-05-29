import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting ={'Bienvenido a nuestra pagina'} name ={'David Tarrab'} msg={'Pronto la pagina estara disponible'}/>
    </div>
  );
}

export default App;
