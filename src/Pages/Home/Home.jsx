import "./Home.css"
import bgFAQ from "../../assets/imgs/Home/FAQ.webp"
import bgChoose from "../../assets/imgs/Home/why choose section.webp"
import bg from "../../assets/imgs/Home/ourservices.webp"
import bgAbout from "../../assets/imgs/Home/What our Clients say About us.webp"
import smallSquare from "../../assets/Icons/smallSquare.png"
import TitleText from "../../Components/TitleText/TitleText"
import Faq from "../../Components/Faq/Faq"
import Thanks from "../../Components/Thanks/thanks"


const Home = () => {
  return (
    <>
  <TitleText
  title="Our Services"
  text="Transform your brand with our innovative digital solutions that captivate and engage your audience."
image={bg}
overlay={smallSquare}
/>


<TitleText
  title="Why Choose SquareUp?"
  text="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
image={bgChoose}
overlay={smallSquare}
/>

<TitleText
  title="What our Clients say About us"
  text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
image={bgAbout}
overlay={smallSquare}
/>


<TitleText
  title="Frequently Asked Questions"
  text="Still you have any questions? Contact our Team via hello@squareup.com"
image={bgFAQ}
overlay={smallSquare}
/>
<Faq />
<Thanks  title="Thank you for your Interest in SquareUp." Text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>
</>
  )
}

export default Home