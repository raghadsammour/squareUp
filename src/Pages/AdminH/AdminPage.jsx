import React, { useState, useEffect } from 'react';
import {
    getCards,
    addCard,
    moveCardToTrash,
    getTrashedCards,
    restoreCard,
    permanentlyDeleteCard,
    updateCard
} from '../../utils/cardsStorage';
import Card from '../../Components/CardHome/CardHome';
import EditCardForm from './EditCardForm';
import AddCardForm from './AddCardForm';
import CardsList from './CardsList';
import './CardsAdmin.css';

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
        alert('تمت إضافة البطاقة بنجاح');
        resetForm();
        refreshData();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateCard(editingCard.id, formData);
        alert('تم تحديث البطاقة بنجاح');
        resetForm();
        refreshData();
    };

    const handleDelete = (id) => {
        if (window.confirm('هل أنت متأكد من نقل هذه البطاقة إلى سلة المحذوفات؟')) {
            moveCardToTrash(id);
            refreshData();
        }
    };

    const handleRestore = (id) => {
        restoreCard(id);
        refreshData();
        alert('تم استعادة البطاقة بنجاح');
    };

    const handlePermanentDelete = (id) => {
        if (window.confirm('هل أنت متأكد من الحذف النهائي؟')) {
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
            <h2>إدارة بطاقات الصفحة الرئيسية</h2>

            <div className="tabs">
                <button
                    className={activeTab === 'cards' ? 'active' : ''}
                    onClick={() => setActiveTab('cards')}
                >
                    البطاقات ({getCards().length})
                </button>
                <button
                    className={activeTab === 'trash' ? 'active' : ''}
                    onClick={() => setActiveTab('trash')}
                >
                    سلة المحذوفات ({getTrashedCards().length})
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