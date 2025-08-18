import Client from "../Client/Client";
import "./ClientsAboutUs.css";

const ClientsAboutUs = ({ title, text, name, work, avatar, link }) => {
  return (
    <div className="slide-card">
      <div>
        <p className="titleClient">{title}</p>
        <p className="textClient">{text}</p>
      </div>
      <Client name={name} work={work} avatar={avatar} link={link} />
    </div>
  );
};

export default ClientsAboutUs;
