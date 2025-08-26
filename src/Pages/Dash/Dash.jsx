import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Dash.css"
import TitleText from '../../Components/TitleText/TitleText'
import bg from "../../assets/imgs/Home/ourservices.webp";
const Dash = () => {

  return (
    <div className='RS_DashPage'>
<TitleText title={"Dashboard"} text={"Edit , Delete and Add"} image={bg}/>
<div className='dashboard'>
    <nav>
        <Link to="EditHome">Home</Link>
        <Link to="EditClient">Work</Link>
        <Link to="editprocess">Process</Link>
        <Link to="editabout">About</Link>
        <Link to="userstable">Users</Link>
      </nav>
  
</div>
      <Outlet />
    </div>
  )
}

export default Dash