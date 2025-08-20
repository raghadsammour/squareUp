import React, { useState } from 'react';
import './CardForm.css';

const CardForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData || {
        id: Date.now(),
        title: '',
        description: '',
        icon: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <input name="icon" placeholder="Icon path (e.g. /src/assets/icons/expertise.png)" value={formData.icon} onChange={handleChange} required />
            <button type="submit">Save</button>
        </form>
    );
};

export default CardForm;
