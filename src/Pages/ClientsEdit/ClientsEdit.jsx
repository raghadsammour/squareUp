import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ClientsEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [avatar, setAvatar] = useState("");
  const [link, setLink] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      const parsed = JSON.parse(savedUsers);
      setUsers(parsed);
      const user = parsed.find((el) => el.id === parseInt(id));
      if (user) {
        setTitle(user.title);
        setText(user.text);
        setName(user.name);
        setWork(user.work);
        setAvatar(user.avatar);
        setLink(user.link);
      }
    }
  }, [id]);

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
    const updatedUsers = users.map((user) =>
      user.id === parseInt(id)
        ? { ...user, title, text, avatar, name, work, link }
        : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
   window.location.reload();
    
  };

  return (
  <form className='RS_FormEdit' onSubmit={handleSubmit}>
   <div className='RS_FormEditService'>

      <label>Name:</label>
      <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
  </div>
  <div className='RS_FormEditService'>

      <label>Work:</label>
      <input type="text" value={work} required onChange={(e) => setWork(e.target.value)} />
  </div>
  <div className='RS_FormEditService'>
      <label>Title:</label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
</div>
  <div className='RS_FormEditService'>

      <label>Text:</label>
      <input type="text" value={text} required onChange={(e) => setText(e.target.value)} />
  </div>
 
  
  <div className='RS_FormEditService'>

      <label>Link:</label>
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
  </div>
  <div className='RS_FormEditService'>

      <label>Avatar:</label>
      <input type="file" onChange={handleAvatar} />
  </div>
    <div className='photoChoose'>

     <img src={avatar} alt="Preview" style={{ width: "100px" }} />
    </div>

      <button type="submit" className='submitService'>Save Changes</button>
    </form>
  );
};

export default ClientsEdit;
