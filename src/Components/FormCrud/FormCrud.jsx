import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const FormCrud = ({ storageItems, lastIdKey, redirectPath, titleText }) => {
  const navigate=useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem(storageItems);
    return stored ? JSON.parse(stored) : [];
  });
  let lastId = parseInt(localStorage.getItem(lastIdKey)) || 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: ++lastId,
      title,
      description,
    };
    localStorage.setItem(lastIdKey, lastId);
    setItems((prev) => [...prev, newItem]);
      navigate(redirectPath)
  };
  useEffect(() => {
    localStorage.setItem(storageItems, JSON.stringify(items));
  }, [items,storageItems]);
  
  return (

      <div className="RB_form">
        <h1>{titleText}</h1>
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

export default FormCrud