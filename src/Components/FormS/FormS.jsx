import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./FormS.css"
const FormS = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [avatar, setAvatar] = useState("");
  const [link, setLink] = useState("");

  const handleAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const savedUsers = localStorage.getItem("users");
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    const id = Date.now();

    const newUser = { id, title, text, name, work, avatar, link };

    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("EditOur");
  };

  return (
    <form className='RS_FormEdit' onSubmit={handleSubmit}>
     <div className='RS_FormEditService'>
      <label>Title:</label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
     </div>
      <div className='RS_FormEditService'>

      <label>Text:</label>
      <input type="text" value={text} required onChange={(e) => setText(e.target.value)} />
</div>
 <div className='RS_FormEditService'>

      <label>Name:</label>
      <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
</div>
 <div className='RS_FormEditService'>

      <label>Work:</label>
      <input type="text" value={work} required onChange={(e) => setWork(e.target.value)} />
</div>
 <div className='RS_FormEditService'>

      <label>Link:</label>
      <input type="text" value={link} required onChange={(e) => setLink(e.target.value)} />
</div>
 <div className='RS_FormEditService'>

      <label>Avatar:</label>
      <input type="file" onChange={handleAvatar} />
</div>
     <div className='photoChoose'>
      <img src={avatar} alt="img" style={{ width: "100px" }} />
</div>
      <button  className='submitService' type="submit">Add Client</button>
    </form>
  );
};

export default FormS;
