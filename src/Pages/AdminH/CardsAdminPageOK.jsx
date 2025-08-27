import React, { useState, useEffect } from 'react';
import {
    getCards,
    addCard,
    moveCardToTrash,
    getTrashedCards,
    restoreCard,
    permanentlyDeleteCard,
    updateCard
} from '../../utils/cardsStorageOK';
import EditCardForm from './EditCardFormOK'; 
import AddCardForm from './AddCardFormOK';
import CardsList from './CardsListOK'; 
import './CardsAdminOK.css'; 

const CardsAdminPage = () => {
    const [cards, setCards] = useState([]);
    const [editingCard, setEditingCard] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        icon: ''
    });
    const [activeTab, setActiveTab] = useState('cards');

    useEffect(() => {
        refreshData();
    }, [activeTab]);

    const refreshData = () => {
        if (activeTab === 'cards') {
            setCards(getCards());
        } else if (activeTab === 'trash') {
            setCards(getTrashedCards());
        }
    };

    const handleEdit = (card) => {
        setEditingCard(card);
        setFormData({
            title: card.title || '',
            description: card.description || '',
            icon: card.icon || ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addCard(formData);
        alert('Card added successfully');
        resetForm();
        refreshData();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateCard(editingCard.id, formData);
        alert('Card updated successfully');
        resetForm();
        refreshData();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to move this card to trash?')) {
            moveCardToTrash(id);
            refreshData();
        }
    };

    const handleRestore = (id) => {
        restoreCard(id);
        refreshData();
        alert('Card restored successfully');
    };

    const handlePermanentDelete = (id) => {
        if (window.confirm('Are you sure you want to permanently delete this card?')) {
            permanentlyDeleteCard(id);
            refreshData();
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            icon: ''
        });
        setEditingCard(null);
    };

    return (
        <div className="admin-container cards-admin">
            <h2>Home Page Cards Management</h2>

            <div className="tabs">
                <button
                    className={activeTab === 'cards' ? 'active' : ''}
                    onClick={() => setActiveTab('cards')}
                >
                    Cards ({getCards().length})
                </button>
                <button
                    className={activeTab === 'trash' ? 'active' : ''}
                    onClick={() => setActiveTab('trash')}
                >
                    Trash ({getTrashedCards().length})
                </button>
            </div>

            {editingCard !== null ? (
                editingCard.id ? (
                    <EditCardForm
                        editingCard={editingCard}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleEditSubmit}
                        setEditingCard={setEditingCard}
                    />
                ) : (
                    <AddCardForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleAddSubmit}
                        setEditingCard={setEditingCard}
                    />
                )
            ) : (
                <CardsList
                    cards={cards}
                    activeTab={activeTab}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                    handlePermanentDelete={handlePermanentDelete}
                    setEditingCard={setEditingCard}
                />
            )}
        </div>
    );
};

export default CardsAdminPage;