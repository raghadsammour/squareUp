import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./HomeEdit.css"
const HomeEdit = () => {
  return (
    <>
      <div className='dashboard'>
        <nav className=''>
          <Link to="EditOur">Our Service</Link>
          <Link to="AdminPageOK">SquareUp</Link>
          <Link to="EditClients">Clientst</Link>
          <Link to="FaqAdminPage">FAQ</Link>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default HomeEdit