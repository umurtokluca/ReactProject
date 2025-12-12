import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return  (
    <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div>
  )
}

function Header() {
  return (
    <div className='header'>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
}

function Menu() {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <Pizza 
        name='Pizza Spinaci' 
        ingredient='Tomato, mozarella, spinach, and ricotta cheese' 
        image='pizzas/spinaci.jpg' 
        price={10}
      />

      <Pizza 
        name='Pizza Funghi' 
        ingredient='Tomato, mushrooms' 
        image='pizzas/funghi.jpg' 
        price={12} 
      />
    </div>
  );
}

function Pizza(props)  {
  return (
    <div className='pizza'>
      <img src={props.image} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry we're closed");
  
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );

  
  //return React.createElement('footer', null, 'Copyright 2025 Fast React Pizza Co.');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
