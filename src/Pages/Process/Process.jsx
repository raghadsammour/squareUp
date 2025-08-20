import TitleText from "../../Components/TitleText/TitleText"
import "./Process.css"
import bgProcess from "../../assets/imgs/Process/herosection.webp"
import smallSquare from "../../assets/Icons/smallSquare.png"
import Thanks from "../../Components/Thanks/thanks"
import AtSquareUp from "../../Components/AtSquareUp/AtSquareUp"

const Process = () => {
  return (<>
  <TitleText
  title="Process of Starting the Project"
  text="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
image={bgProcess}
overlay={smallSquare}
/>
<AtSquareUp />
<Thanks title="Thank you for your Interest in SquareUp." Text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us." />

</>
  )
}

export default Process