import { useState } from "react";
import plusIcon from "../../assets/Icons/+ icon.svg";
import closeIcon from "../../assets/Icons/x icon.svg";

const FaqItem = ({ question, answer, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-header ">
        <span className={isOpen ? "faq-number active" : "faq-number"}>{number}</span>
        <h3 className={isOpen ? "faq-question active" : "faq-question"}>{question}</h3>
        <button className="faq-toggle" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? closeIcon : plusIcon}
            alt={isOpen ? "Close" : "Open"}
            className="faq-toggle-icon"
          />
        </button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FaqItem;