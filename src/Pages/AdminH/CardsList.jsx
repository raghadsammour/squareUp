import React from 'react';
import Card from '../../Components/CardHome/CardHome';

const CardsList = ({
    cards,
    activeTab,
    handleEdit,
    handleDelete,
    handleRestore,
    handlePermanentDelete,
    setEditingCard
}) => {
    return (
        <>
            <div className="admin-actions">
                <button
                    className="add-btn"
                    onClick={() => setEditingCard({})}
                >
                    إضافة بطاقة جديدة
                </button>
            </div>

            <div className="cards-grid-admin">
                {cards.length === 0 ? (
                    <p className="no-cards">لا توجد بطاقات لعرضها</p>
                ) : (
                    cards.map(card => (
                        <div key={card.id} className="admin-card-wrapper">
                            <Card card={card} />
                            <div className="card-actions">
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(card)}
                                >
                                    تعديل
                                </button>
                                {activeTab === 'cards' ? (
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(card.id)}
                                    >
                                        حذف
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="restore-btn"
                                            onClick={() => handleRestore(card.id)}
                                        >
                                            استعادة
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handlePermanentDelete(card.id)}
                                        >
                                            حذف نهائي
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default CardsList;