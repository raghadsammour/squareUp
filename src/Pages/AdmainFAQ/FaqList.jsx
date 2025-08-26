import React from 'react';

const FaqList = ({
    faqs,
    activeTab,
    handleEdit,
    handleDelete,
    handleRestore,
    handlePermanentDelete,
    setEditingFaq
}) => {
    return (
        <>
            <div className="faq-admin-actions">
                <button
                    className="faq-add-btn"
                    onClick={() => setEditingFaq({})}
                >
                    Add New FAQ
                </button>
            </div>

            <div className="faq-table-container">
                {faqs.length === 0 ? (
                    <p className="no-faqs">No FAQs to display</p>
                ) : (
                    <table className="faq-table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq, index) => (
                                <tr key={faq.id}>
                                    <td>{index + 1}</td>
                                    <td>{faq.question}</td>
                                    <td className="answer-cell">
                                        {faq.answer ? (
                                            faq.answer.length > 100 ? 
                                                `${faq.answer.substring(0, 100)}...` : 
                                                faq.answer
                                        ) : (
                                            'No answer'
                                        )}
                                    </td>
                                    <td>
                                        <div className="faq-table-actions">
                                            <button
                                                className="faq-edit-btn"
                                                onClick={() => handleEdit(faq)}
                                            >
                                                Edit
                                            </button>
                                            {activeTab === 'faqs' ? (
                                                <button
                                                    className="faq-delete-btn"
                                                    onClick={() => handleDelete(faq.id)}
                                                >
                                                    Delete
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        className="faq-restore-btn"
                                                        onClick={() => handleRestore(faq.id)}
                                                    >
                                                        Restore
                                                    </button>
                                                    <button
                                                        className="faq-delete-btn"
                                                        onClick={() => handlePermanentDelete(faq.id)}
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

export default FaqList;