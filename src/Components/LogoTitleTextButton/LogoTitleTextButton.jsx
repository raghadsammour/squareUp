import { Link } from "react-router-dom";
import "./LogoTitleTextButton.css";
import Icon from "../Icon/Icon";

const LogoTitleTextButton = ({ logo, title, text}) => {
  return (
    <div className="cardService">
      <div className="paragraphIcon-container">
      <Icon />
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>
        <p className="title">{title}</p>
      </div>
      <p className="text">{text}</p>

      <Link to="/Work">
        <button className="learnMore">Learn More</button>
      </Link>
    </div>
  );
};

export default LogoTitleTextButton;
