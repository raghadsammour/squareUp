import React from 'react';

const EditCardForm = ({
    editingCard,
    formData,
    handleChange,
    handleSubmit,
    setEditingCard
}) => {
    return (
        <div className="edit-form">
            <h3>Edit Card</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Enter card title"
                    />
                </div>

                <div className="form-group">
                    <label>Description*</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                        placeholder="Enter card description"
                    />
                </div>

                <div className="form-group">
                    <label>Icon URL (Optional)</label>
                    <input
                        type="text"
                        name="icon"
                        value={formData.icon}
                        onChange={handleChange}
                        placeholder="https://example.com/icon.png"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">
                        Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditingCard(null)}
                        className="cancel-btn"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditCardForm;