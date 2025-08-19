import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./TableCrud.css"
const TableCrud = ({ storageItems, editRoute,goTo}) => {
  const navigate=useNavigate()
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem(storageItems);
    return stored ? JSON.parse(stored) : [];
  });

  const deleteItem = (idDeleted) => {
    const itemsAfterDelete = items.filter(item => item.id !== idDeleted);
    setItems(itemsAfterDelete);
    localStorage.setItem(storageItems, JSON.stringify(itemsAfterDelete));
    navigate(goTo)
  };
  
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
          items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => deleteItem(item.id)}>delete</button>
                  <Link to={`${editRoute}/${item.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default TableCrud;
