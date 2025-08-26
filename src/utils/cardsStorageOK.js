export const getCards = () => {
    const cards = localStorage.getItem('homeCards');
    return cards ? JSON.parse(cards) : [];
};

export const getTrashedCards = () => {
    const trashed = localStorage.getItem('trashedHomeCards');
    return trashed ? JSON.parse(trashed) : [];
};

export const addCard = (cardData) => {
    const cards = getCards();
    const newCard = {
        id: Date.now().toString(),
        ...cardData,
        createdAt: new Date().toISOString()
    };
    const updatedCards = [...cards, newCard];
    localStorage.setItem('homeCards', JSON.stringify(updatedCards));
    return newCard;
};

export const updateCard = (id, cardData) => {
    const cards = getCards();
    const updatedCards = cards.map(card =>
        card.id === id ? { ...card, ...cardData, updatedAt: new Date().toISOString() } : card
    );
    localStorage.setItem('homeCards', JSON.stringify(updatedCards));
};

export const moveCardToTrash = (id) => {
    const cards = getCards();
    const trashedCards = getTrashedCards();
    const cardToTrash = cards.find(card => card.id === id);

    if (cardToTrash) {
        const updatedCards = cards.filter(card => card.id !== id);
        const updatedTrashed = [...trashedCards, { ...cardToTrash, trashedAt: new Date().toISOString() }];

        localStorage.setItem('homeCards', JSON.stringify(updatedCards));
        localStorage.setItem('trashedHomeCards', JSON.stringify(updatedTrashed));
    }
};

export const restoreCard = (id) => {
    const cards = getCards();
    const trashedCards = getTrashedCards();
    const cardToRestore = trashedCards.find(card => card.id === id);

    if (cardToRestore) {
        const { trashedAt, ...cardData } = cardToRestore;
        const updatedTrashed = trashedCards.filter(card => card.id !== id);
        const updatedCards = [...cards, cardData];

        localStorage.setItem('homeCards', JSON.stringify(updatedCards));
        localStorage.setItem('trashedHomeCards', JSON.stringify(updatedTrashed));
    }
};

export const permanentlyDeleteCard = (id) => {
    const trashedCards = getTrashedCards();
    const updatedTrashed = trashedCards.filter(card => card.id !== id);
    localStorage.setItem('trashedHomeCards', JSON.stringify(updatedTrashed));
}; 

