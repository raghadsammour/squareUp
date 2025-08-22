import Container from "../../Components/Container/Container";
import { useState } from "react";
import Card from "../../Components/Card/Card";
import TitleText from "../../Components/TitleText/TitleText";
import "./About.css";
import bgAbout from "../../assets/imgs/About/Abouthero.webp";
import smallSquare from "../../assets/Icons/smallSquare.png";
import SectionAbout from "../../Components/SectionAbout/SectionAbout";
const About = () => {
  const [itemsAbout, setItemsAbout] = useState(() => {
    const stored = localStorage.getItem("itemsAbout");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div className="work-page">
      <TitleText
        title="About Us"
        text="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image={bgAbout}
        overlay={smallSquare}
      />

      <SectionAbout />
      <Container>
        {itemsAbout.length === 0 ? (
          <p className="RB_Process_Description">There is no items to show</p>
        ) : (
          itemsAbout.map((item) => (
            <Card
              style={{ color: "white" }}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))
        )}
      </Container>
    </div>
  );
};

export default About;
