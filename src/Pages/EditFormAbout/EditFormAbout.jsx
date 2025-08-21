import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditFormAbout = () => {
    const  {id}  = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [itemsAbout, setItems] = useState(() => {
              const stored = localStorage.getItem("itemsAbout");
              return stored ? JSON.parse(stored) : [];
            });
            useEffect(()=>{
              const item=itemsAbout.find(item=>item.id==Number(id))
              if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [id, itemsAbout]);
            useEffect(() => {
                localStorage.setItem("itemsAbout", JSON.stringify(itemsAbout));
              }, [itemsAbout]);
              const handleSubmit=(e)=>{
                e.preventDefault()
                const updatedItemsAbout=itemsAbout.map(item=>item.id==id?{...item,title,description}:item)
                setItems(updatedItemsAbout)
                navigate("/about");
                
              }
  return (
    <div className="RB_Form_Edit">
      <h1>Edit your strong item</h1>
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

export default EditFormAbout