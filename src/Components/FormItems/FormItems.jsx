import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const FormItems = () => {
  const navegate=useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem("items");
    return stored ? JSON.parse(stored) : [];
  });
  let lastId = parseInt(localStorage.getItem("lastId")) || 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: ++lastId,
      title,
      description,
    };
    localStorage.setItem("lastId", lastId);
    console.log(newItem);
    setItems((items) => [...items, newItem]);
      navegate("/process")
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  
  return (

      <div className="RB_form">
        <h1>Add a new step</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="submit" value="add" />
          <input type="reset" value="reset" />
        </form>
      </div> )
}

export default FormItems