import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableAbout = () => {
  const [itemsAbout, setItemsAbout] = useState(() => {
    const stored = localStorage.getItem("itemsAbout");
    return stored ? JSON.parse(stored) : [];
  });
  const deleteItem = (idDeletedAbout) => {
    const itemsAfterDeleteAbout = itemsAbout.filter(
      (item) => item.id != idDeletedAbout
    );
    setItemsAbout(itemsAfterDeleteAbout);
    localStorage.setItem("itemsAbout", JSON.stringify(itemsAfterDeleteAbout));
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
        {itemsAbout.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <button
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  delete
                </button>
                <Link to={`/dashboard/editformabout/${item.id}`}>Edit</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableAbout;
