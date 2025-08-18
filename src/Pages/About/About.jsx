import TitleText from "../../Components/TitleText/TitleText";
import "./About.css";
import bgAbout from "../../assets/imgs/About/Abouthero.webp";
import smallSquare from "../../assets/Icons/smallSquare.png";

const About = () => {
  return (
    <TitleText
      title="About Us"
      text="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
      image={bgAbout}
      overlay={smallSquare}
    />
  );
};

export default About;
