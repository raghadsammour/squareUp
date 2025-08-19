/* import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./TableItems.css"

const TableItems = () => {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem("items");
    return stored ? JSON.parse(stored) : [];
  });
  const deleteItem=(idDeleted)=>{
    const itemsAfterDelete=items.filter(item=>item.id!=idDeleted)
    setItems(itemsAfterDelete)
    localStorage.setItem("items",JSON.stringify(itemsAfterDelete))
  }
  return (
    <table className="RB_Table">
        <thead>
          <tr>
          <th>id</th>
          <th>title</th>
          <th>description</th>
          <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item)=>{
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td><button onClick={()=>{deleteItem(item.id)}}>delete</button>
                  <Link to={`/dashboard/editform/${item.id}`}>Edit</Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </table> 
  )
}

export default TableItems */