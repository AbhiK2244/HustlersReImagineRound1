import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';

function MenuCard(props) {
  const cursorRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    const cardElement = cardRef.current;

    const handleMouseMove = (movement) => {
      const rect = cardElement.getBoundingClientRect();
      cursorElement.style.left = movement.clientX - rect.left + 'px';
      cursorElement.style.top = movement.clientY - rect.top + 'px';
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    if (cardElement) {
      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseenter', handleMouseEnter);
      cardElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener('mousemove', handleMouseMove);
        cardElement.removeEventListener('mouseenter', handleMouseEnter);
        cardElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="cursor" ref={cursorRef} style={{ display: isHovered ? 'block' : 'none' }}></div>
      <div className="desc-img">
        <div className="descriptions">
          <div className='title-container'>
            <h1 className="product-title">{props.name}</h1>
          </div>
          <p className="product-description">
            {props.description}
          </p>
        </div>
        <div className="img-container">
          <img src={props.image} alt="Farm House Pizza" className="image" />
        </div>
      </div>
      <div className="buttons">
        <div className="price-quantity">
          <span className='price-tag'><span>Rs. {props.price}</span></span>
          <Counter />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default MenuCard;

