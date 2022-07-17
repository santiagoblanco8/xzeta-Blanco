import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContext from './components/CartContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmrw1-ntObacd-stbyz3c-IknTnHEZO78",
  authDomain: "xzeta-blanco.firebaseapp.com",
  projectId: "xzeta-blanco",
  storageBucket: "xzeta-blanco.appspot.com",
  messagingSenderId: "689967106359",
  appId: "1:689967106359:web:edd1bf8f62d8a7a782b2b2",
  measurementId: "G-49MKFGPXSY"
};

initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartContext>
    <App />
</CartContext>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
