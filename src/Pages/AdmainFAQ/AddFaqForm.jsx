import React from 'react';

const AddFaqForm = ({
    formData,
    handleChange,
    handleSubmit,
    setEditingFaq
}) => {
    return (
        <div className="edit-form">
            <h3>Add New FAQ</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Question*</label>
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Answer*</label>
                    <textarea
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                        rows="5"
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">
                        Add FAQ
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditingFaq(null)}
                        className="cancel-btn"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFaqForm;