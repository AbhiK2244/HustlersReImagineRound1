// import React, { useEffect, useState } from 'react';
// import './App.css';
// import MenuCard from './MenuCard.jsx';
// import cards from '../../../menuCards.js';

// function Menu() {

//   const [movement, setMovement] = useState(0);

//   useEffect(() => {
//     cardmovement();
//   },[movement])

//   function setforward(){
//     setMovement(movement - 40);
//   }

//   function setbackward(){
//     setMovement(movement + 40);
//   }

//   function cardmovement(){
//     let cards = document.querySelectorAll(".card");

//     cards.forEach((card) => {
//       card.style.transform = `translateX(${movement}%)`
//     })
    
//   }

//   return (
//     <div className='menu-page'>
//         <div className='heading-container'>
//             <h1 className='menu-heading'>OUR MOST POPULAR</h1>
//         </div>

//         <div className='button-card-container'>
//           <button className="slide-button left-slide" onClick={setbackward}>{'<'}</button>
//           <div className="cards">
//             {cards.map((card) => {
//               return <MenuCard key = {card.id} name = {card.name} description={card.description} image={card.image} price={card.price}/>
//             })}
//           </div>
//           <button className="slide-button right-slide" onClick={setforward}>{'>'}</button>
//         </div>
//     </div>
//   );
// }

// export default Menu;


import React, { useEffect, useState } from 'react';
import './App.css';
import MenuCard from './MenuCard.jsx';
import cardsData from '../../../menuCards.js';

function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    cardMovement();
  }, [currentIndex]);

  function setForward() {
    if (currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function setBackward() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function cardMovement() {
    const cards = document.querySelectorAll('.card');
    const cardWidth = 100; // Adjust this value based on your card width
    cards.forEach((card) => {
      card.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
    });
  }


  return (
    <div className='menu-page'>
      <div className='heading-container'>
        <h1 className='menu-heading'>OUR MOST POPULAR</h1>
      </div>

      <div className='button-card-container'>
        <button className="slide-button left-slide" onClick={setBackward}>{'<'}</button>
        <div className="cards">
          {cardsData.map((card) => (
            <MenuCard
              key={card.id}
              id = {card.id}
              name={card.name}
              description={card.description}
              image={card.image}
              price={card.price}
              className="card"
            />
          ))}
        </div>
        <button className="slide-button right-slide" onClick={setForward}>{'>'}</button>
      </div>
    </div>
  );
}

export default Menu;

