import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css"

const EditForm = () => {
    const  {id}  = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [items, setItems] = useState(() => {
        const stored = localStorage.getItem("items");
        return stored ? JSON.parse(stored) : [];
      });
      useEffect(()=>{

        const item=items.find(item=>item.id==Number(id))
        if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [id, items]);
      useEffect(() => {
          localStorage.setItem("items", JSON.stringify(items));
        }, [items]);
        const handleSubmit=(e)=>{
          e.preventDefault()
          const updatedItems=items.map(item=>item.id==id?{...item,title,description}:item)
          setItems(updatedItems)
          navigate("/process");
          
        }
  return (
    <div className="RB_Form_Edit">
      <h1>Edit your Step</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)
            }
            value={title}
          />
          <input
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)
            }
            value={description}
          />
          <input type="submit" value="add" />
          <input type="reset" value="reset" />
        </form>
      </div>
  )
}

export default EditForm