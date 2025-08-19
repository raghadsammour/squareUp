import "./Home.css";
import bgFAQ from "../../assets/imgs/Home/FAQ.webp";
import bgChoose from "../../assets/imgs/Home/why choose section.webp";
import bg from "../../assets/imgs/Home/ourservices.webp";
import bgAbout from "../../assets/imgs/Home/What our Clients say About us.webp";
import smallSquare from "../../assets/Icons/smallSquare.png";
import TitleText from "../../Components/TitleText/TitleText";
import HeroHome from "../../Components/HeroHome/HeroHome";
import image from "../../assets/imgs/Home/hero.webp";
import Header from "../../Components/Header/Header";
const Home = () => {
  const card = [
    {
      id: 1,
      logo: designIcon,
      title: "Design",
      text: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    },
    {
      id: 2,
      logo: engineeringIcon,
      title: "Engineering",
      text: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    },
    {
      id: 3,
      logo: projectManagementIcon,
      title: "Project Management",
      text: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    },
  ];
  const companies = [
    { name: "Zapier", logo: zapier },
    { name: "Spotify", logo: Spotify },
    { name: "Zoom", logo: Zoom },
    { name: "Slack", logo: Slack },
    { name: "amazon", logo: amazon },
    { name: "Adobe", logo: Adobe },
  ];
  const users = [
    {
      id: 1,
      name: "John Smith",
      work: "CEO of Chic Boutique.",
      avatar: john,
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence. ",
      text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
      link: "#",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      work: "Founder of HungryBites.",
      avatar: sarah,
      title: "Working with SquareUp was a breeze.",
      text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
      link: "#",
    },
    {
      id: 3,
      name: "Mark Thompson",
      work: "CEO of EventMasters",
      avatar: mark,
      title:
        "SquareUp developed a comprehensive booking and reservation system for our event management company",
      text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
      link: "#",
    },
    {
      id: 4,
      name: "Laura Adams",
      work: "COO of ProTech Solutions.",
      avatar: laura,
      title: "ProTech Solutions turned to SquareUp to automate our workflow",
      text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
      link: "#",
    },
    {
      id: 5,
      name: "Michael Anderson",
      work: "Founder of Dream Homes Realty.",
      avatar: micheal,
      title:
        "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
      text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
      link: "#",
    },
    {
      id: 6,
      name: "Emily Turner",
      work: "CEO of FitLife Tracker",
      avatar: emily,
      title:
        "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
      text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
      link: "#",
    },
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
        <TitleText
          title="Our Services"
          text="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          image={bg}
          overlay={smallSquare}
        />
      </Header>

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
    </>
  );
};

export default Home;
