import TitleText from "../../Components/TitleText/TitleText";
import "./Work.css";
import bgAbout from "../../assets/imgs/Home/What our Clients say About us.webp";
import smallSquare from "../../assets/Icons/smallSquare.png";

const Work = () => {
  return (
    <TitleText
      title="What our Clients say About us"
      text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.
   Here's what some of our satisfied clients have to say about their experience working with us"
      image={bgAbout}
      overlay={smallSquare}
    />
  );
};

export default Work;
