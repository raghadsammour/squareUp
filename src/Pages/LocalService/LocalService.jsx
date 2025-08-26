import {useState, useEffect } from "react";
import LogoTitleTextButton from "../../Components/LogoTitleTextButton/LogoTitleTextButton";
import designIcon from "../../assets/Icons/design.svg"
import engineeringIcon from "../../assets/Icons/engineering.svg"
import projectManagementIcon from "../../assets/Icons/projectmangment.svg"

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

const LocalService = () => {
  const [serviceItems, setServiceItems] = useState(() => {
    const stored = localStorage.getItem("card");
    return stored ? JSON.parse(stored) : card;
  });

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(serviceItems));
  }, [serviceItems]);

  return (
    <div className="servicesC">
      {
        serviceItems.map((service) => (
          <LogoTitleTextButton
            key={service.id}
            logo={service.logo}
            title={service.title}
            text={service.text}
          />
        ))
        }
    </div>
  );
};

export default LocalService;
