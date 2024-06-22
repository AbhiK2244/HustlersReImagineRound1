import React from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';

function MenuCard(props) {
  return (
    <div className="card">
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
          <span className='price-tag'>Rs. {props.price}</span>
          <Counter />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default MenuCard;
