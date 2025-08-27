import Container from "../../Components/Container/Container";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import TitleText from "../../Components/TitleText/TitleText";
import "./About.css";
import bgAbout from "../../assets/imgs/About/Abouthero.webp";
import SectionAbout from "../../Components/SectionAbout/SectionAbout";
import DesignTitle from "../../Components/DesignTitle/DesignTitle";

import ContactProject from "../../Components/ContactProject/ContactProject"

const About = () => {
  let defaultItemsAbout=[
    {
      id:1,
      title:"Design",
      description:"Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression."
    },
    {
      id:2,
      title:"Engineering",
      description:"Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible."
    },
    {
      id:3,
      title:"Project Management",
      description:"In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget."
    },
    {
      id:4,
      title:"Collaboration",
      description:"At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations."
    },
    {
      id:5,
      title:"Client-Centric Approach",
      description:"SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey."
    },
    {
      id:6,
      title:"Driving Success",
      description:"With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world."
    }
  ]
    const [itemsAbout,setItemsAbout]=useState(()=>{
      const stored=localStorage.getItem("itemsAbout")
      return stored?JSON.parse(stored): []
  })
useEffect(() => {
  const stored = localStorage.getItem("itemsAbout");
  if (!stored) {
    localStorage.setItem("itemsAbout", JSON.stringify(defaultItemsAbout));

    setItemsAbout(defaultItemsAbout); 

    localStorage.setItem("lastIdAbout", String(defaultItemsAbout.length));
  }
}, []);


    
  return (
    <div className="work-page whiteSpacing">
      <TitleText
        title="About Us"
        text="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image={bgAbout}
      />

      <SectionAbout />
      <DesignTitle text="Our Story"/>
      <Container>
        {itemsAbout.length === 0 ? (
          <p className="RB_Process_Description">There is no items to show</p>
        ) : (
          itemsAbout.map((item) => (
            <Card className="RB_Card about"
              style={{ color: "white" }}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))
        )}
      </Container>

<ContactProject/>

    </div>
  );
};

export default About;
