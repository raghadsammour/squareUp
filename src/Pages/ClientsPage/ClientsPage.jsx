import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import john from "../../assets/imgs/Home/Clients/John a.jpg";
import emily from "../../assets/imgs/Home/Clients/Emily a.jpg";
import laura from "../../assets/imgs/Home/Clients/Laura a.jpg";
import mark from "../../assets/imgs/Home/Clients/Mark a.jpg";
import micheal from "../../assets/imgs/Home/Clients/Micheal a.jpg";
import sarah from "../../assets/imgs/Home/Clients/Sarah a.jpg";
import "./ClientPage.css"
const ClientsPage = () => {
  const user = [
    {
      id: 1,
      name: "John Smith",
      work: "CEO of Chic Boutique.",
      avatar: john,
      title: "SquareUp has been Instrumental in Transforming our Online Presence.",
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
      title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
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
      title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
      text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
      link: "#",
    },
    {
      id: 6,
      name: "Emily Turner",
      work: "CEO of FitLife Tracker",
      avatar: emily,
      title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
      text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
      link: "#",
    },
  ];

  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : user;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
  };


  return (
    <>
    <Link to="CreateClients" className="AddService">
  <button>Add New</button>
</Link>

 <div className="TableService">

<Outlet />

<div className="services">
  <table className="RS_tableShow">
    <thead>
      <tr>
        <th>Name</th>
        <th>Work</th>
        <th>Avatar</th>
        <th>Title</th>
        <th>Text</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.work}</td>
          <td>
            <img src={user.avatar} alt={user.name} width="100" />
          </td>
          <td><b>{user.title}</b></td>
          <td>{user.text}</td>
          <td>
            <Link to={`ClientsEdit/${user.id}`}>
              <button className="buttonGreen edit" >Edit</button>
            </Link>
            <button  className="buttonGreen delete" onClick={() => handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
</div>
 </div>

    </>
  );
};

export default ClientsPage;
