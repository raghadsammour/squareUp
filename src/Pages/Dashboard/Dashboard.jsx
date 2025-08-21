import "./Dashboard.css";
import {Outlet } from "react-router-dom";
// import TableItems from "../../Components/TableItems/TableItems";
// import FormItems from "../../Components/FormItems/FormItems";
// import FormAbout from "../../Components/FormAbout/FormAbout";
// import TableAbout from "../../Components/TableAbout/TableAbout";
import FormCrud from "../../Components/FormCrud/FormCrud";
import TableCrud from "../../Components/TableCrud/TableCrud";
const Dashboard = () => {
  return (
    <div className="RB_DashboardContainer">
       <div className="RB_One">
      <FormCrud storageItems="items" 
    lastIdKey="lastId"
        redirectPath="/process"
        titleText="Add a new Step"/> 
        <TableCrud
        storageItems="items"
        editRoute="/dashboard/editform"
        goTo="/process"
      />
    </div>
        <div className="RB_One">
          <FormCrud
        storageItems="itemsAbout"
        lastIdKey="lastIdAbout"
        redirectPath="/about"
        titleText="Add a new strong item"
      />
      <TableCrud
        storageItems="itemsAbout"
        editRoute="/dashboard/editformabout"
        goTo="/about"
        
      />
        </div>
      <Outlet/>

    </div>

  ); 
};

export default Dashboard;
