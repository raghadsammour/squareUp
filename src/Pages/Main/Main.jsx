
import React from 'react';
import Card from '../../Components/CardHome/CardHome';
import expertiseIcon from '../../assets/imgs/Choose/expertise.svg';
import clientIcon from '../../assets/imgs/Choose/client.svg';
import resultsIcon from '../../assets/imgs/Choose/results.svg';
import partnershipIcon from '../../assets/imgs/Choose/partnership.svg';
import './Main.css';

const Main = () => {
    const [cards] = React.useState([
        {
            id: 1,
            icon: expertiseIcon,
            title: "Client-Centric Approach",
            description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
        },
        {
            id: 2,
            icon: clientIcon,
            title: "Collaborative Partnership",
            description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
        },
        {
            id: 3,
            icon: resultsIcon,
            title: "Results-Driven Solutions",
            description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
        },
        {
            id: 4,
            icon: partnershipIcon,
            title: "Expertise",
            description: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
        },
    ]);

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