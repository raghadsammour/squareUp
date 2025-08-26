
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Work from "./Pages/Work/Work.jsx";
import Process from "./Pages/Process/Process.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Clients from "./Pages/Clients/Clients.jsx";
import { Route, Routes } from "react-router-dom";
/* import Dashboard from "./Pages/Dashboard/Dashboard.jsx"; */
import EditForm from "./Pages/EditForm/EditForm.jsx";
import EditFormAbout from "./Pages/EditFormAbout/EditFormAbout.jsx";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TrashPage from './Pages/TrashPage/TrashPage';
/* import AdminPage from './Pages/Admin/AdminPage'; */
/* import UsersTable from "./Pages/UsersTable/UsersTable.jsx"; */
import AdminPage from './Pages/AdminW/AdminPage.jsx';
/* import AdminPage from './Pages/AdminH/AdminPage.jsx';
import UsersTable from "./Pages/UsersTable/UsersTable.jsx"; */

import Dash from "./Pages/Dash/Dash.jsx";
import HomeEdit from "./Pages/HomeEdit/HomeEdit.jsx";
import OurService from "./Pages/OurService/OurService.jsx";
import EditService from "./Pages/EditService/EditService.jsx";
import CreateService from "./Pages/CreateService/CreateService.jsx";
import ClientsPage from "./Pages/ClientsPage/ClientsPage.jsx";
import CreateClients from "./Pages/CreateClients/CreateClients.jsx";
import ClientsEdit from "./Pages/ClientsEdit/ClientsEdit.jsx";

import ProcessPage from "./Pages/ProcessPage/ProcessPage.jsx";
import ProcessForm from "./Pages/ProcessForm/ProcessForm.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import AboutForm from "./Pages/AboutForm/AboutForm.jsx";
import UsersTable from "./Pages/UsersTable/UsersTable.jsx";
import AdminPage from "./Pages/AdminW/AdminPage.jsx"
import AdminPageOK from "./Pages/AdminH/AdminPageOK.jsx"
import FaqAdminPage from "./Pages/AdmainFAQ/FaqAdminPage.jsx";

// import UsersTable from "./Pages/UsersTable//UsersTable.jsx"
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/process' element={<Process />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/clients' element={<Clients />} />
        <Route path="/trash" element={<TrashPage />} />
        {/* <Route path='/dashboard' element={<Dashboard />} >
          <Route path='/dashboard/editform/:id' element={<EditForm />} />
          <Route path='/dashboard/editformabout/:id' element={<EditFormAbout />} />
          <Route path='/dashboard/userstable' element={<UsersTable/>} />

        </Route> */}
        {/* <Route path='/dashboard' element={<Dashboard />} >
          <Route path='/dashboard/editform/:id' element={<EditForm />} />
          <Route path='/dashboard/editformabout/:id' element={<EditFormAbout />} />
          <Route path='/dashboard/userstable' element={<UsersTable/>} />

        </Route> */}


        <Route path="/Dash" element={<Dash />}>

          {/* Home */}
          <Route path="EditHome" element={<HomeEdit />}>
            <Route path="EditOur" element={<OurService />} >
              <Route path="ServiceEdit/:id" element={<EditService />} />
              <Route path="CreateService" element={<CreateService />} />
            </Route>
            <Route path="EditClients" element={<ClientsPage />} >
              <Route path="ClientsEdit/:id" element={<ClientsEdit />} />
              <Route path="CreateClients" element={<CreateClients />} />
            </Route>
            {/* sqareup */}

            <Route path="AdminPageOK" element={<AdminPageOK />} >
              
            </Route>
            {/* Faq */}
            <Route path="FaqAdminPage" element={<FaqAdminPage />} >
              <Route path="ClientsEdit/:id" element={<ClientsEdit />} />
              <Route path="CreateClients" element={<CreateClients />} />
            </Route>
          </Route>




          {/* work */}
          <Route path="AdminPage" element={<AdminPage />} >
          </Route> *

 {/* Process */}
          <Route path="editprocess" element={<ProcessPage/>} >
                <Route path="editform/:id" element={<EditForm/>} />
                <Route path="processform" element={<ProcessForm 
                storageItems="items"
          lastIdKey="lastId"
          redirectPath="/process"
          titleText="Add a new step"/>} />
            </Route>
{/* About */}
        <Route path="editabout" element={<AboutPage/>} >
                <Route path="editformabout/:id" element={<EditFormAbout/>} />
                <Route path="aboutform" element={<AboutForm
                storageItems="itemsAbout"
            lastIdKey="lastIdAbout"
            redirectPath="/about"
            titleText="Add a new strong item"/>}/>
            </Route> 
            <Route path="userstable" element={<UsersTable/>}/>

        </Route>
      </Routes>
      <Footer />
    </>

  )
}
export default App;
