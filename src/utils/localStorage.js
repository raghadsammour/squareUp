// src/utils/localStorage.js

const STORAGE_KEY = 'cardsData';

export const getCards = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveCards = (cards) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};

export const addCard = (card) => {
    const cards = getCards();
    saveCards([...cards, card]);
};

export const updateCard = (updatedCard) => {
    const cards = getCards().map(card =>
        card.id === updatedCard.id ? updatedCard : card
    );
    saveCards(cards);
};

export const deleteCard = (id) => {
    const cards = getCards().filter(card => card.id !== id);
    saveCards(cards);
};
