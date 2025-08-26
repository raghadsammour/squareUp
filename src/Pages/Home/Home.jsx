
import "./Home.css"
import bgFAQ from "../../assets/imgs/Home/FAQ.webp"
import bgChoose from "../../assets/imgs/Home/why choose section.webp"
import bg from "../../assets/imgs/Home/ourservices.webp"
import bgAbout from "../../assets/imgs/Home/What our Clients say About us.webp"
import TitleText from "../../Components/TitleText/TitleText"
import Faq from "../../Components/Faq/Faq"
import Thanks from "../../Components/Thanks/thanks"
import HeroHome from "../../Components/HeroHome/HeroHome";
import image from "../../assets/imgs/Home/hero.webp";
import Header from "../../Components/Header/Header";
import Companies from "../../Components/Companies/Companies";
import zapier from "../../assets/Icons/zapier.svg";
import Zoom from "../../assets/Icons/zoom.png";
import Adobe from "../../assets/Icons/adobe.svg";
import amazon from "../../assets/Icons/amazon.svg";
import Slack from "../../assets/Icons/slack.svg";
import Spotify from "../../assets/Icons/spotify.svg";

import Main from '../Main/MainOK';
import LocalService from "../LocalService/LocalService"
import LocalClients from "../LocalClients/LocalClients"
import LocalClientsSlider from "../../Components/LocalClientsSlider/LocalClientsSlider "

const Home = () => {

  const companies = [
    { name: "Zapier", logo: zapier },
    { name: "Spotify", logo: Spotify },
    { name: "Zoom", logo: Zoom },
    { name: "Slack", logo: Slack },
    { name: "amazon", logo: amazon },
    { name: "Adobe", logo: Adobe },
  ];

  return (
    <>
 <Header className="RB_Header">
        <HeroHome
          image={image}
          title="A Digital Product Studio
                      that will Work"
          btn1="Our Works"
          btn2="Contact Us"
          description="Trusted By 250+ Companies"
        />
      </Header>

      <ul className="companyName">
        {companies.map((company, index) => (
          <Companies key={index} name={company.name} logo={company.logo} />
        ))}
      </ul>

      <TitleText
        title="Our Services"
        text="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        image={bg}
     
      />

      <div className="services">
        {
          <LocalService />}
      </div>

      <TitleText
        title="Why Choose SquareUp?"
        text="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        image={bgChoose}

      />
      <div className="home">
        <Main />
      </div>
      <TitleText
        title="What our Clients say About us"
        text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
        image={bgAbout}

      />

      <div className="clients">
  <LocalClients/>
      </div>

      <div className="slideSmall">
        <LocalClientsSlider />
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js"></script>
      <TitleText
        title="Frequently Asked Questions"
        text="Still you have any questions? Contact our Team via hello@squareup.com"
        image={bgFAQ}
      />
      <Faq />
<Thanks  title="Thank you for your Interest in SquareUp." Text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."/>

</>
  )
}

export default Home

     

