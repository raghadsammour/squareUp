import React, { useState, useEffect } from 'react';
import john from "../../assets/imgs/Home/Clients/John a.jpg";
import emily from "../../assets/imgs/Home/Clients/Emily a.jpg";
import laura from "../../assets/imgs/Home/Clients/Laura a.jpg";
import mark from "../../assets/imgs/Home/Clients/Mark a.jpg";
import micheal from "../../assets/imgs/Home/Clients/Micheal a.jpg";
import sarah from "../../assets/imgs/Home/Clients/Sarah a.jpg";
import ClientsAboutUs from '../../Components/ClientsAboutUs/ClientsAboutUs';

const initialUsers = [
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

const LocalClients = () => {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : initialUsers;
  });

  // حفظ التحديثات في localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // حذف مستخدم
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="clients">
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className="clientCard">
            <ClientsAboutUs
              id={user.id}
              name={user.name}
              work={user.work}
              avatar={user.avatar}
              title={user.title}
              text={user.text}
              link={user.link}
            />
         
          </div>
        ))
      ) : (
        <p>No clients found.</p>
      )}
    </div>
  );
};

export default LocalClients;
