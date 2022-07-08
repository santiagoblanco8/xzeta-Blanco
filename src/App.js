import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCart from './components/ItemCart';
import HOCContext from './components/HOCContext';


export default function App() {
  return (
    <HOCContext>
    
    <div className="App"> 
    <BrowserRouter>
    <header className="App-header">
        <NavBar></NavBar>

      </header>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<ItemCart/>}/>
    </Routes>
    </BrowserRouter>
  
    </div>
    </HOCContext>
  );
}

