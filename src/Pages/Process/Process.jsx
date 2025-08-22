
import TitleText from "../../Components/TitleText/TitleText";
import "./Process.css";
import bgProcess from "../../assets/imgs/Process/herosection.webp";
import smallSquare from "../../assets/Icons/smallSquare.png";
import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
const Process = () => {

  const [items,setItems]=useState(()=>{
      const stored=localStorage.getItem("items")
      return stored?JSON.parse(stored):[]
  })
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
    <div className="work-page">
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
              <Card
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

    </div>
  );
};


export default Process;
