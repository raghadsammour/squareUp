import React, { useState, useEffect } from "react";
import Slider from "../../Components/Slider/Slider";

const LocalClientsSlider = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      setUsers(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      {users.length > 0 ? <Slider slides={users} /> : <p>No users found.</p>}
    </div>
  );
};

export default LocalClientsSlider;
