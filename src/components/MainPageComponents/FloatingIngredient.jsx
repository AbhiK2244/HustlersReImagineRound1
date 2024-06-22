import React from 'react';
import './FloatingIngredient.css';

function FloatingIngredient({ src, alt }) {
  return <img src={src} alt={alt} className="floating-ingredient" />;
}

export default FloatingIngredient;
