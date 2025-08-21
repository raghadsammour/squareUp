import { useState } from "react";
import plusIcon from "../../assets/Icons/+ icon.svg";
import closeIcon from "../../assets/Icons/x icon.svg";

const TitleDev = ({ title, answer, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="title-dev">
      <div className="faq-question-header">
        <span className={isOpen ? "question-number open" : "question-number"}>{number}</span>
        <h2 className={isOpen ? "question-title open" : "question-title"}>{title}</h2>
        <button className="toggle-answer-btn" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={isOpen ? closeIcon : plusIcon}
            alt={isOpen ? "Close" : "Open"}
            className="icon"
          />
        </button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default TitleDev;
