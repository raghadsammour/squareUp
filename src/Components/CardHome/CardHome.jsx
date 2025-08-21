import React from 'react';
import './CardHome.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ card, onDelete }) => {
    const navigate = useNavigate();

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
            <div className="card-actions">
                <button onClick={() => navigate(`/edit/${card.id}`)}>Edit</button>
                <button onClick={() => onDelete(card.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;