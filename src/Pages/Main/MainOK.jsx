import React, { useState, useEffect } from 'react';
import Card from '../../Components/CardHome/CardHomeOK'; 
import { getCards, addCard } from '../../utils/cardsStorageOK'; 
import expertiseIcon from '../../assets/imgs/Choose/expertise.svg';
import clientIcon from '../../assets/imgs/Choose/client.svg';
import resultsIcon from '../../assets/imgs/Choose/results.svg';
import partnershipIcon from '../../assets/imgs/Choose/partnership.svg';
import './MainOK.css';

const Main = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const savedCards = getCards();

        if (savedCards.length === 0) {
            const defaultCards = [
                {
                    id: "1",
                    icon: expertiseIcon,
                    title: "Expertise",
                    description: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
                },
                {
                    id: "2",
                    icon: resultsIcon,
                    title: "Results-Driven Solutions",
                    description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
                },
                {
                    id: "3",
                    icon: clientIcon,
                    title: "Client-Centric Approach",
                    description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
                },
                {
                    id: "4",
                    icon: partnershipIcon,
                    title: "Collaborative Partnership",
                    description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
                }
            ];

            defaultCards.forEach(card => addCard(card));

            setCards(getCards());
        } else {
            setCards(savedCards);
        }
    }, []);

    return (
        <div className="main">
            <div className="card-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default Main;
