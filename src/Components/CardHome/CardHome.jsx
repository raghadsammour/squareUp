import React from 'react';
import './CardHome.css';

const Card = ({ card }) => {
    if (!card) {
        return <div className="card error">Error: Card data is missing</div>;
    }

    return (
        <div className="card">
            <div className="card-header">
                {card.icon && <img src={card.icon} alt={card.title || 'Card icon'} className="card-icon" />}
                <h3>{card.title || 'No title'}</h3>
            </div>
            <p>{card.description || 'No description'}</p>
        </div>
    );
};

export default Card;