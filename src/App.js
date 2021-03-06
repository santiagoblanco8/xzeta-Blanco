//@ts-check
import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(()=> {
    Aos.init();
    Aos.refresh();
  }, []);
  
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
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      
    </Routes>
    </BrowserRouter>
  
    </div>
    
  );
}

export default App;
