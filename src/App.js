//@ts-check
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from './components/ItemList';

function App() {
  
  function onAdd(cant) {
    alert(cant + " productos han sido agregados al carrito")
  }
  return (
    <div className="App"> 
    <BrowserRouter>
    <header className="App-header">
        <NavBar></NavBar>
      </header>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      
    </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
