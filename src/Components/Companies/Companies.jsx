import "./Companies.css";

const Companies = ({ companyName, logo }) => {
  return (
    <li className="company">
      <img src={logo} alt={companyName} />
      {companyName}
    </li>
  );
};

export default Companies;
