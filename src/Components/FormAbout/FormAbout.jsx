import React, { useEffect, useState } from "react";

const FormAbout = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [itemsAbout, setItemsAbout] = useState(() => {
    const stored = localStorage.getItem("itemsAbout");
    return stored ? JSON.parse(stored) : [];
  });
  let lastIdAbout = parseInt(localStorage.getItem("lastIdAbout")) || 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: ++lastIdAbout,
      title,
      description,
    };
    localStorage.setItem("lastIdAbout", lastIdAbout);
    setItemsAbout((itemsAbout) => [...itemsAbout, newItem]);
    window.location.replace("/about");
  };
  useEffect(() => {
    localStorage.setItem("itemsAbout", JSON.stringify(itemsAbout));
  }, [itemsAbout]);

  return (
    <div className="RB_form">
      <h1>Add a new strong item</h1>
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
    </div>
  );
};

export default FormAbout;
