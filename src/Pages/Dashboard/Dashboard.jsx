import "./Dashboard.css";
import {Outlet } from "react-router-dom";
import TableItems from "../../Components/TableItems/TableItems";
import FormItems from "../../Components/FormItems/FormItems";
import FormAbout from "../../Components/FormAbout/FormAbout";
import TableAbout from "../../Components/TableAbout/TableAbout";
const Dashboard = () => {
  return (
    <>
      <FormItems/>
      <TableItems/>
      <FormAbout/>
      <TableAbout/>
      <Outlet/>
    </>
  ); 
};

export default Dashboard;
