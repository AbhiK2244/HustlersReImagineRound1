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
            return <MenuCard key = {card.id} name = {card.name} description={card.description} image={card.image} price={card.price}/>
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


// import React, { useEffect, useRef } from 'react';
// import './App.css';
// import MenuCard from './MenuCard.jsx';
// import cards from '../../../menuCards.js';

// function Menu() {
//   const cursorRef = useRef(null);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     const cursorElement = cursorRef.current;
//     const cardsContainerElement = cardsContainerRef.current;

//     const handleMouseMove = (movement) => {
//       const rect = cardsContainerElement.getBoundingClientRect();
//       cursorElement.style.left = movement.clientX - rect.left + 'px';
//       cursorElement.style.top = movement.clientY - rect.top + 'px';
//     };

//     if (cardsContainerElement) {
//       cardsContainerElement.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (cardsContainerElement) {
//         cardsContainerElement.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, []);

//   return (
//     <div className='menu-page'>
//       <div className='heading-container'>
//         <h1 className='menu-heading'>OUR MOST POPULAR</h1>
//       </div>
//       <div className="cards" ref={cardsContainerRef}>
//         <div className="cursor" ref={cursorRef}></div>
//         {cards.map((card, index) => (
//           <MenuCard
//             key={index}
//             name={card.name}
//             description={card.description}
//             image={card.image}
//             price={card.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;



// import React, { useEffect, useRef } from 'react';
// import './App.css';
// import MenuCard from './MenuCard.jsx';
// import cards from '../../../menuCards.js';

// function Menu() {
//   const cursorRef = useRef(null);
//   const menuRef = useRef(null);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     const cursorElement = cursorRef.current;
//     const menuElement = menuRef.current;
//     const cardsContainerElement = cardsContainerRef.current;

//     const handleMouseMove = (movement) => {
//       const rect = cardsContainerElement.getBoundingClientRect();
//       const isInsideCards = (
//         movement.clientX >= rect.left &&
//         movement.clientX <= rect.right &&
//         movement.clientY >= rect.top &&
//         movement.clientY <= rect.bottom
//       );

//       if (isInsideCards) {
//         cursorElement.style.left = movement.clientX - rect.left + 'px';
//         cursorElement.style.top = movement.clientY - rect.top + 'px';
//         cursorElement.style.opacity = 1;
//       } else {
//         cursorElement.style.opacity = 0;
//       }
//     };

//     if (menuElement) {
//       menuElement.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (menuElement) {
//         menuElement.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, []);

//   return (
//     <div className='menu-page' ref={menuRef}>
//       <div className='heading-container'>
//         <h1 className='menu-heading'>OUR MOST POPULAR</h1>
//       </div>
//       <div className="cards" ref={cardsContainerRef}>
//         <div className="cursor" ref={cursorRef}></div>
//         {cards.map((card, index) => (
//           <MenuCard
//             key={index}
//             name={card.name}
//             description={card.description}
//             image={card.image}
//             price={card.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;



// import React, { useEffect, useRef } from 'react';
// import './App.css';
// import MenuCard from './MenuCard.jsx';
// import cards from '../../../menuCards.js';

// function Menu() {
//   const cursorRef = useRef(null);
//   const menuRef = useRef(null);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     const cursorElement = cursorRef.current;
//     const menuElement = menuRef.current;
//     const cardsContainerElement = cardsContainerRef.current;

//     const handleMouseMove = (movement) => {
//       const rect = cardsContainerElement.getBoundingClientRect();
//       const isInsideCards = (
//         movement.clientX >= rect.left &&
//         movement.clientX <= rect.right &&
//         movement.clientY >= rect.top &&
//         movement.clientY <= rect.bottom
//       );

//       cursorElement.style.left = movement.clientX + 'px';
//       cursorElement.style.top = movement.clientY + 'px';

//       if (isInsideCards) {
//         cursorElement.style.display = 'block';
//       } else {
//         cursorElement.style.display = 'none';
//       }
//     };

//     if (menuElement) {
//       menuElement.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (menuElement) {
//         menuElement.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, []);

//   return (
//     <div className='menu-page' ref={menuRef}>
//       <div className='heading-container'>
//         <h1 className='menu-heading'>OUR MOST POPULAR</h1>
//       </div>
//       <div className="cards" ref={cardsContainerRef}>
//         <div className="cursor" ref={cursorRef}></div>
//         {cards.map((card, index) => (
//           <MenuCard
//             key={index}
//             name={card.name}
//             description={card.description}
//             image={card.image}
//             price={card.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;
