import "./Client.css";

const Client = ({ name, work, avatar, link }) => {
  return (
    <div className="client-card">
      <div className="imgName">
        <div className="img-box">
          <img src={avatar} alt={name} />
        </div>
        <div className="clientInfo">
          <p className="clientName">{name}</p>
          <p className="clientWork">{work}</p>
        </div>
      </div>
      <a className="website" href={link}>
        open website
      </a>
    </div>
  );
};

export default Client;
