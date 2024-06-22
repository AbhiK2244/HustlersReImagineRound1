import React from 'react';
import './App.css';
import MenuCard from './MenuCard.jsx';
import cards from '../../../menuCards.js';

function Menu() {
  return (
    <div className='menu-page'>
        <div className='heading-container'>
            <h1 className='menu-heading'>OUR MOST POPULAR</h1>
        </div>
        <div className="cards">
          {cards.map((card) => {
            return <MenuCard name = {card.name} description={card.description} image={card.image} price={card.price}/>
          })}
        </div>
    </div>
  );
}

export default Menu;

// bg  color: #04638F
// Navigation font: Futura Bold
// Hot & Fresh Font: TT bluescreens
// our most popular font: Futura Bold
// Menu dish name font: Futura
// Description name: Helvetica
