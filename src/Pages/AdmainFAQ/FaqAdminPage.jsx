import React, { useState, useEffect } from 'react';
import {
    getFaqs,
    addFaq,
    moveToTrash,
    getTrashedFaqs,
    restoreFaq,
    permanentlyDeleteFaq,
    updateFaq,
    initializeFaqs
} from '../../utils/StorageFAQ';
import EditFaqForm from './EditFaqForm';
import AddFaqForm from './AddFaqForm';
import FaqList from './FaqList';
import './FaqAdminPage.css';

const FaqAdminPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [editingFaq, setEditingFaq] = useState(null);
    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    });
    const [activeTab, setActiveTab] = useState('faqs');

    useEffect(() => {
        // تهيئة البيانات عند تحميل المكون لأول مرة
        initializeFaqs();
        refreshData();
    }, []);

    useEffect(() => {
        refreshData();
    }, [activeTab]);

    const refreshData = () => {
        if (activeTab === 'faqs') {
            setFaqs(getFaqs());
        } else if (activeTab === 'trash') {
            setFaqs(getTrashedFaqs());
        }
    };

    const handleEdit = (faq) => {
        setEditingFaq(faq);
        setFormData({
            question: faq.question || '',
            answer: faq.answer || ''
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

        const faqData = {
            question: formData.question.trim(),
            answer: formData.answer.trim()
        };

        addFaq(faqData);
        alert('Added successfully');

        setFormData({
            question: '',
            answer: ''
        });
        setEditingFaq(null);
        refreshData();
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const faqData = {
            question: formData.question.trim(),
            answer: formData.answer.trim()
        };

        updateFaq(editingFaq.id, faqData);
        alert('Updated successfully');

        setFormData({
            question: '',
            answer: ''
        });
        setEditingFaq(null);
        refreshData();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to move this FAQ to trash?')) {
            moveToTrash(id);
            refreshData();
        }
    };

    const handleRestore = (id) => {
        restoreFaq(id);
        refreshData();
        alert('FAQ restored successfully');
    };

    const handlePermanentDelete = (id) => {
        if (window.confirm('Are you sure you want to permanently delete?')) {
            permanentlyDeleteFaq(id);
            refreshData();
        }
    };

    return (
        <div className="faq-admin-container">
            <h2>FAQ Management</h2>

            <div className="faq-tabs">
                <button
                    className={activeTab === 'faqs' ? 'active' : ''}
                    onClick={() => setActiveTab('faqs')}
                >
                    FAQs ({getFaqs().length})
                </button>
                <button
                    className={activeTab === 'trash' ? 'active' : ''}
                    onClick={() => setActiveTab('trash')}
                >
                    Trash ({getTrashedFaqs().length})
                </button>
            </div>

            {editingFaq !== null ? (
                editingFaq.id ? (
                    <EditFaqForm
                        editingFaq={editingFaq}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleEditSubmit}
                        setEditingFaq={setEditingFaq}
                    />
                ) : (
                    <AddFaqForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleAddSubmit}
                        setEditingFaq={setEditingFaq}
                    />
                )
            ) : (
                <FaqList
                    faqs={faqs}
                    activeTab={activeTab}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleRestore={handleRestore}
                    handlePermanentDelete={handlePermanentDelete}
                    setEditingFaq={setEditingFaq}
                />
            )}
        </div>
    );
};

export default FaqAdminPage;