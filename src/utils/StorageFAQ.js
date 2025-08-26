import FaqData from '../Data/Data';
export const getFaqs = () => {
    const faqs = localStorage.getItem('faqs');
    return faqs ? JSON.parse(faqs).filter(faq => !faq.deleted) : [];
};

export const getTrashedFaqs = () => {
    const faqs = localStorage.getItem('faqs');
    return faqs ? JSON.parse(faqs).filter(faq => faq.deleted) : [];
};

export const initializeFaqs = () => {
    const existingFaqs = localStorage.getItem('faqs');
    if (!existingFaqs) {
        const initializedData = FaqData.map(faq => ({
            ...faq,
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString(),
            deleted: false
        }));
        localStorage.setItem('faqs', JSON.stringify(initializedData));
        return initializedData;
    }
    return JSON.parse(existingFaqs);
};

export const addFaq = (faqData) => {
    const faqs = getFaqs();
    const newFaq = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        ...faqData,
        createdAt: new Date().toISOString(),
        deleted: false
    };
    const updatedFaqs = [...faqs, newFaq];
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
    return newFaq;
};

export const updateFaq = (id, faqData) => {
    const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
    const updatedFaqs = faqs.map(faq =>
        faq.id === id ? { ...faq, ...faqData, updatedAt: new Date().toISOString() } : faq
    );
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
};

export const moveToTrash = (id) => {
    const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
    const updatedFaqs = faqs.map(faq =>
        faq.id === id ? { ...faq, deleted: true, deletedAt: new Date().toISOString() } : faq
    );
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
};

export const restoreFaq = (id) => {
    const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
    const updatedFaqs = faqs.map(faq =>
        faq.id === id ? { ...faq, deleted: false, restoredAt: new Date().toISOString() } : faq
    );
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
};

export const permanentlyDeleteFaq = (id) => {
    const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
    const updatedFaqs = faqs.filter(faq => faq.id !== id);
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
};