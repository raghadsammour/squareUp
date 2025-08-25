import { useState, useEffect } from "react";
import TitleDev from "../../Components/Title/Title";
import FaqData from "../../Data/Data";
import "./Faq.css";

const Faq = () => {
    const [faqList, setFaqList] = useState(() => {
        const storedFaqs = localStorage.getItem("faqs");
        return storedFaqs ? JSON.parse(storedFaqs) : FaqData;
    });

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const leftFaqs = faqList.slice(0, 4);
    const rightFaqs = faqList.slice(4);

    const visibleRightFaqs = isMobile && !showAll ? [] : rightFaqs;

    return (
        <div className="faq-container">
            <div className="faq-columns-container">
                <div className="faq-column">
                    {leftFaqs.map((faq, idx) => (
                        <TitleDev
                            key={idx}
                            number={`0${idx + 1}`}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>

                <div className="faq-column">
                    {visibleRightFaqs.map((faq, idx) => {
                        const questionNumber = idx + 5;
                        return (
                            <TitleDev
                                key={idx}
                                number={questionNumber < 10 ? `0${questionNumber}` : `${questionNumber}`}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        );
                    })}
                </div>
            </div>
            {isMobile && !showAll && (
                <div className="show-more-container">
                    <button
                        className="show-more-btn"
                        onClick={() => setShowAll(true)}
                    >
                        Show More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            )}

            {isMobile && showAll && (
                <div className="show-more-container">
                    <button
                        className="show-less-btn"
                        onClick={() => setShowAll(false)}
                    >
                        Show Less
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12 10L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Faq;