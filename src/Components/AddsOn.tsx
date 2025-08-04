
import React from 'react';
import './AddsOn.css';
import type { ProductSectionProps } from './ProductSectionProps';

const AddsOn: React.FC<ProductSectionProps> = ({ products, onAdd, onMinus }) => {
  return (
    <div className="app-container">
      {products.map(p => (
        <div className="card" key={p.id}>
          <h4>{p.title}</h4>
          <img src={p.imgURL} alt={p.title} />
           <p>{p.description}</p>
          <p>₱{p.price}</p>
          <div className="quantity-control">
            <button onClick={() => onMinus(p.id)} className="qty-button">-</button>
            <p>{p.quantity}</p>
            <button onClick={() => onAdd(p.id)} className="qty-button">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddsOn;
