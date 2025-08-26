import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./EditService.css"
const EditService = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [logo, setLogo] = useState("");
  const [serviceItems, setServiceItems] = useState([]);

  useEffect(() => {
    const savedServiceItems = localStorage.getItem("card");
    if (savedServiceItems) {
      const parsed = JSON.parse(savedServiceItems);
      setServiceItems(parsed);
      const item = parsed.find((el) => el.id === parseInt(id));
      if (item) {
        setTitle(item.title);
        setText(item.text);
        setLogo(item.logo);
      }
    }
  }, [id]);

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
    const updatedServiceItems = serviceItems.map((item) =>
      item.id === parseInt(id) ? { ...item, title, text, logo } : item
    );
    localStorage.setItem("card", JSON.stringify(updatedServiceItems)); 
        window.location.reload();
  };

  return (
    <form className='RS_FormEdit' onSubmit={handleSubmit}>
      <div className='RS_FormEditService'>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='RS_FormEditService'>
        <label>Text:</label>
        <input
          type="text"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='RS_FormEditService'>
        <label>Logo:</label>
        <input type="file" onChange={handleLogo} />
      </div>
      <div className='photoChoose'>
       <img src={logo} alt="Preview" style={{ width: "100px" }} />
      </div>
      <button className='submitService' type="submit">Save Changes</button>
    </form>
  );
};

export default EditService;
