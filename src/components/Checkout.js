import React, {useState} from 'react'

export default function Checkout() {
    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    
    const pedido= {
        buyer: { nombre: nombre, tel: tel, email:email },
        carrito: [
            {id: 101, title: "zapato lol", price: 100 },
            {id: 101, title: "zapato lol", price: 100 }
        ],
        total: 1000,
    };

    function handleClickComprar(){
        alert('intenta comprar')
    }
  return (
    <div>
        <input onchange={(e) => setNombre(e.target.value)} type={'text'} placeholder={'Ingrese nombre'}></input>
        <br/>
        <input onchange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'Ingrese tel'}></input>
        <br/>
        <input onchange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'Ingrese email'}></input>
        <br/>
        <br/>
        <button onClick={handleClickComprar}>Comprar</button>
    </div>
  );
}

