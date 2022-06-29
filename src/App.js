import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  function onAdd(cant) {
    alert(cant + " productos han sido agregados al carrito")
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <ItemCount limiteStock={5} valorInicial={1} onAdd={onAdd}/>
      <ItemListContainer />
    </div>
  );
}

export default App;
