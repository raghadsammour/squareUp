import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Form.css";
// import "../../Pages/ClientsPage/ClientsPage.css";

const Form = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState("");

  const handleLogo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedServiceItems = localStorage.getItem("card"); // تعديل الاسم هنا
    const serviceItems = savedServiceItems ? JSON.parse(savedServiceItems) : [];
    const id = Date.now();
    const newItem = { id, text, title, logo };

    const updatedServiceItems = [...serviceItems, newItem];
    localStorage.setItem("card", JSON.stringify(updatedServiceItems)); // تعديل الاسم هنا

    navigate(-1);
    window.location.reload();
  };

  return (
    <form className='RS_FormEdit' onSubmit={handleSubmit}>
      <div className='RS_FormEditService'>
        <label >Title:</label>
        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className='RS_FormEditService'>
        <label>Text:</label>
        <input type="text" value={text} required onChange={(e) => setText(e.target.value)} />
      </div>

      <div className='RS_FormEditService'>
        <label>Logo:</label>
        <input type="file" onChange={handleLogo} />
      </div>

      <div className='photoChoose'>
      <img src={logo} alt="img" style={{ width: "100px" }}/>
      </div>
      <button className='submitService' type="submit">Add Service</button>
    </form>
  );
};

export default Form;
