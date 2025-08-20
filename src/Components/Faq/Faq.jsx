import { useState } from "react";
import TitleDev from "../../Components/Title/Title";
import FaqData from "../../Data/Data";
import "./Faq.css";

const Faq = () => {
    const [faqList, setFaqList] = useState(() => {
        const storedFaqs = localStorage.getItem("faqs");
        return storedFaqs ? JSON.parse(storedFaqs) : FaqData;
    });
    const visibleFaqs = faqList;
    const leftFaqs = visibleFaqs.slice(0, 4);
    const rightFaqs = visibleFaqs.slice(4);
    return (
      <div className="faq-columns">
         <div className="faq-column-left">
               {leftFaqs.map((faq, idx) => (
                    <div className="faq-card" key={idx}>
                     <TitleDev
                          number={`0${idx + 1}`}
                            title={faq.question}
                       answer={faq.answer}
                        />
                    </div>
                ))}
            </div>

            <div className="faq-column-right">
                {rightFaqs.map((faq, idx) => {
                    const questionNumber = idx + 5;
                    return (
                        <div className="faq-card" key={idx}>
                            <TitleDev
                              number={questionNumber < 10 ? `0${questionNumber}` : `${questionNumber}`}
                              title={faq.question}
                              
                              answer={faq.answer}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;
