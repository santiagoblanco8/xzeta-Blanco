import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  
  function onAdd(cant) {
    alert(cant + " productos han sido agregados al carrito")
  }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <ItemListContainer msg="Usuario"/>
      <ItemCount limiteStock={5} valorInicial={1} onAdd={onAdd}/>
    </div>
  );
}

export default App;
