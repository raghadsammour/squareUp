import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./HomeEdit.css"
const HomeEdit = () => {
  return (
    <>
    <div className='dashboard'>
<nav className=''>
    <Link to="EditOur">Our Service</Link>
    <Link to="EditSquareUp">SquareUp</Link>
        <Link to="EditClients">Clientst</Link>
        <Link to="Editfaq">FAQ</Link>
</nav>
        <Outlet/>
    </div>
    </>
  )
}

export default HomeEdit