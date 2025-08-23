
import TitleText from "../../Components/TitleText/TitleText";
import "./Process.css";
import bgProcess from "../../assets/imgs/Process/herosection.webp";
import smallSquare from "../../assets/Icons/smallSquare.png";
import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
const Process = () => {
  let defaultItems=[
    {
      id:1,
      title:"Discovery",
      description:"We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
    },
    {
      id:2,
      title:"Planning and Strategy",
      description:"Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
    },
    {
      id:3,
      title:"Design",
      description:"Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
    },
    {
      id:4,
      title:"Development",
      description:"Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
    },
    {
      id:5,
      title:"Testing and Quality Assurance",
      description:"We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability."
    },
    {
      id:6,
      title:"Deployment and Launch",
      description:"When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations."
    },
    {
      id:7,
      title:"Post-Launch Support",
      description:"Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."
    },
    {
      id:8,
      title:"Continuous Improvement",
      description:"We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve."
    }
  ]
  const [items,setItems]=useState(()=>{
      const stored=localStorage.getItem("items")
      return stored?JSON.parse(stored):[]
  })
  /* useEffect(() => {
  const stored = localStorage.getItem("items");
  if (!stored) {
    localStorage.setItem("items", JSON.stringify(defaultItems));
  }
}, []); */
useEffect(() => {
  const stored = localStorage.getItem("items");
  if (!stored) {
    localStorage.setItem("items", JSON.stringify(defaultItems));
    setItems(defaultItems); 
    localStorage.setItem("lastId", String(defaultItems.length));
  }
}, []); 

    const [showMore, setShowMore] = useState(() => {
    const storedShowMore = localStorage.getItem("showMore");
    return storedShowMore === "false" ? false : true;
  });
    useEffect(() => {
    localStorage.setItem("showMore", showMore);
  }, [showMore])
    const shouldShowButton = items.length > 4;
    const halfLength = Math.ceil(items.length / 2);
    const visibleItems = showMore ? items : items.slice(0, halfLength);
  return (
    <>
      <TitleText
        title="Process of Starting the Project"
        text="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        image={bgProcess}
        overlay={smallSquare}
      />
      <Container>
        {visibleItems.length === 0 ? (
          <p className="RB_Process_Description">There is no items to show</p>
        ) : (
          visibleItems.map((item) => {
            return (
              <Card className="RB_Card"
                style={{ color: "white" }}
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            );
          })
        )}
      </Container>

      {shouldShowButton && (
        <button onClick={() => setShowMore(!showMore)} className="RB_Show">
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}

    </>
  );
};


export default Process;
