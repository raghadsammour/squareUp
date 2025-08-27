import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./OurService.css";

const OurService = () => {

  const [serviceItems, setServiceItems] = useState(() => {
    const stored = localStorage.getItem("card");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(serviceItems));
  }, [serviceItems]);

  const handleDelete = (id) => {
    const updatedServiceItems = serviceItems.filter((item) => item.id !== id);
    setServiceItems(updatedServiceItems);
  };

  return (
    <>
      <Link to="CreateService" className="AddService">
        <button>Add New</button>
      </Link>
      <div className="TableService">

      <Outlet />

   <div className="servicesTable">
  {serviceItems.length > 0 ? (
    <table
      className="RS_tableShow"
          >
      <thead>
        <tr>
          <th>Logo</th>
          <th>Title</th>
          <th>Text</th>
   
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {serviceItems.map((service) => (
          <tr key={service.id}>
            <td>
              {service.logo && (
                <img
                  src={service.logo}
                  alt="logo"
                  style={{width:'50px'}}
                                 />
              )}
            </td>
            <td>{service.title}</td>
            <td>{service.text}</td>
           
            <td>
              <button className="buttonGreen edit">
                <Link to={`ServiceEdit/${service.id}`}>Edit</Link>
              </button>
              <button
                className="buttonGreen delete"
                onClick={() => handleDelete(service.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No services found.</p>
  )}
</div>

      </div>
    </>
  );
};

export default OurService;
