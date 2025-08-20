import React, { useEffect, useState } from 'react';
import { getCards, updateCard } from '../../utils/localStorage';
import { useNavigate, useParams } from 'react-router-dom';
import CardForm from '../../components/CardForm/CardForm';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const card = getCards().find(c => c.id === Number(id));
        if (card) setInitialData(card);
    }, [id]);

    const handleSubmit = (data) => {
        updateCard(data);
        navigate('/');
    };

    return (
        <div>
            <h2>Edit Card</h2>
            {initialData && <CardForm onSubmit={handleSubmit} initialData={initialData} />}
        </div>
    );
};

export default Edit;
