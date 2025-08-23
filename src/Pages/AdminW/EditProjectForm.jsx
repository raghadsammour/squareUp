import React from 'react';
/* تعديل المشروع الحالي */
const EditProjectForm = ({
    editingProject,
    formData,
    handleChange,
    handleSubmit,
    setEditingProject
}) => {
    return (
        <div className="edit-form">
            <h3>تعديل المشروع</h3>
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
                    <label>الوصف</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>

                <div className="form-group">
                    <label>رابط الصورة</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>الإنجازات (سطر لكل إنجاز)</label>
                    <textarea
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                        rows="5"
                    />
                </div>

                <div className="form-group">
                    <label>رابط المشروع</label>
                    <input
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">
                        حفظ التعديلات
                    </button>
                    <button
                        type="button"
                        onClick={() => setEditingProject(null)}
                        className="cancel-btn"
                    >
                        إلغاء
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProjectForm;