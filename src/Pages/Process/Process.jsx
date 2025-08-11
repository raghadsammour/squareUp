import TitleText from "../../Components/TitleText/TitleText"
import "./Process.css"
import bgProcess from "../../assets/imgs/Process/herosection.webp"
import smallSquare from "../../assets/Icons/smallSquare.png"

const Process = () => {
  return (
  <TitleText
  title="Process of Starting the Project"
  text="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
image={bgProcess}
overlay={smallSquare}
/>
  )
}

export default Process