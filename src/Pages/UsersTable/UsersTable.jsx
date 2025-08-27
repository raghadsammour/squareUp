import React, { useState } from 'react'
import "./UsersTable.css"
const UsersTable = () => {
    const [users, setUsers] = useState(() => {
        const stored = localStorage.getItem("users")
        return stored ? JSON.parse(stored) : []
      })
  return (
    <div className="RB_Container_Table">
        <table className='RB_Table End'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Demand</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.options?.join(", ")}</td>
                        <td>{user.message}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>
    )
}

export default UsersTable