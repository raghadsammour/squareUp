import React from 'react';

const AddCardForm = ({
    formData,
    handleChange,
    handleSubmit,
    setEditingCard
}) => {
    return (
        <div className="edit-form">
            <h3>إضافة بطاقة جديدة</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>العنوان*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>الوصف*</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>رابط الأيقونة (اختياري)</label>
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
                        إضافة البطاقة
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditingCard(null)}
                        className="cancel-btn"
                    >
                        إلغاء
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCardForm;