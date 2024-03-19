import React from 'react';
import './CreditCard.css'; // Assuming you have a CSS file for styling

function CreditCard({ cardName, highlights, features, fees, imgSrc, link }) {
  return (
    <div className="creditCard">
        {highlights === 'Most Popular' && (
        <div className="most-popular-badge">{highlights}</div>
      )}
        
      <img src={imgSrc} alt={cardName} className="cardImage" />
      <h2> 
         <a href={link} target="_blank" rel="noopener noreferrer" className="cardNameLink">
          {cardName}
        </a>
    </h2>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="fees">
        {fees.map((fee, index) => (
          <div key={index}>
            <strong>{fee.label}:</strong> {fee.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreditCard;
