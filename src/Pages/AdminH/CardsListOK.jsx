import React from 'react';

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
                    Add New Card
                </button>
            </div>

            <div className="cards-table-container">
                {cards.length === 0 ? (
                    <p className="no-cards">No cards to display</p>
                ) : (
                    <table className="cards-table">
                        <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map(card => (
                                <tr key={card.id} className="card-row">
                                    <td className="card-icon-cell">
                                        {card.icon && (
                                            <img
                                                src={card.icon}
                                                alt={card.title || 'Card icon'}
                                                className="card-icon-small"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                    </td>
                                    <td className="card-title-cell">
                                        {card.title || 'No title'}
                                    </td>
                                    <td className="card-description-cell">
                                        {card.description || 'No description'}
                                    </td>
                                    <td className="card-actions-cell">
                                        <div className="card-actions">
                                            <button
                                                className="edit-btn"
                                                onClick={() => handleEdit(card)}
                                            >
                                                Edit
                                            </button>
                                            {activeTab === 'cards' ? (
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => handleDelete(card.id)}
                                                >
                                                    Delete
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        className="restore-btn"
                                                        onClick={() => handleRestore(card.id)}
                                                    >
                                                        Restore
                                                    </button>
                                                    <button
                                                        className="delete-permanent-btn"
                                                        onClick={() => handlePermanentDelete(card.id)}
                                                    >
                                                        Delete Permanently
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default CardsList;