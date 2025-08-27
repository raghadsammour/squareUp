import TitleText from "../../Components/TitleText/TitleText"
import "./Work.css"
import bgAbout from "../../assets/imgs/Home/What our Clients say About us.webp"

import Thanks from "../../Components/Thanks/thanks"

import MainWork from '../../Pages/MainWork/MainWork';

const Work = () => {
  return (
<div className="whiteSpacing work-page">


  <div className="">
      <TitleText
        title="What our Clients say About us"
        text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        image={bgAbout}
       
      />
      <div className="MainWork">
        <MainWork />
      </div>
    </div>
    
<Thanks title="Let us Bring your Ideas to Life in the Digital World." Text="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product." />

</div>
  )
}

export default Work

