
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Work from "./Pages/Work/Work.jsx";
import Process from "./Pages/Process/Process.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Clients from "./Pages/Clients/Clients.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import EditForm from "./Pages/EditForm/EditForm.jsx";
import EditFormAbout from "./Pages/EditFormAbout/EditFormAbout.jsx";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CardsAdminPage from './Pages/AdminH/CardsAdminPage.jsx';
import TrashPage from './Pages/TrashPage/TrashPage';
import AdminPage from './Pages/AdminH/AdminPage.jsx';
import UsersTable from "./Pages/UsersTable/UsersTable.jsx";
import Dash from "./Pages/Dash/Dash.jsx";
import HomeEdit from "./Pages/HomeEdit/HomeEdit.jsx";
import OurService from "./Pages/OurService/OurService.jsx";
import EditService from "./Pages/EditService/EditService.jsx";
import CreateService from "./Pages/CreateService/CreateService.jsx";
import ClientsPage from "./Pages/ClientsPage/ClientsPage.jsx";
import CreateClients from "./Pages/CreateClients/CreateClients.jsx";
import ClientsEdit from "./Pages/ClientsEdit/ClientsEdit.jsx";
// import UsersTable from "./Pages/UsersTable//UsersTable.jsx"
function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/process' element={<Process />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/clients' element={<Clients />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminh" element={<CardsAdminPage />} />
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
                <Route path="ServiceEdit/:id" element={<EditService/>} />
                <Route path="CreateService" element={<CreateService/>} />
            </Route>
            <Route path="EditClients" element={<ClientsPage/>} >
                <Route path="ClientsEdit/:id" element={<ClientsEdit/>} />
                <Route path="CreateClients" element={<CreateClients/>} />
            </Route>
{/* sqareup */}
             {/* <Route path="EditClients" element={<ClientsPage/>} >
                <Route path="ClientsEdit/:id" element={<ClientsEdit/>} />
                <Route path="CreateClients" element={<CreateClients/>} />
            </Route> */}
{/* Faq */}
             <Route path="EditClients" element={<ClientsPage/>} >
                <Route path="ClientsEdit/:id" element={<ClientsEdit/>} />
                <Route path="CreateClients" element={<CreateClients/>} />
            </Route>
        </Route>




{/* work */}
         {/* <Route path="EditClients" element={<ClientsPage/>} >
                <Route path="ClientsEdit/:id" element={<ClientsEdit/>} />
                <Route path="CreateClients" element={<CreateClients/>} />
            </Route> */}




 {/* Process */}
        {/* <Route path="EditClients" element={<ClientsPage/>} >
                <Route path="ClientsEdit/:id" element={<ClientsEdit/>} />
                <Route path="CreateClients" element={<CreateClients/>} />
            </Route> */}




{/* About */}
      {/* <Route path="EditClients" element={<ClientsPage/>} >
                <Route path="ClientsEdit/:id" element={<ClientsEdit/>} />
                <Route path="CreateClients" element={<CreateClients/>} />
            </Route> */}

        </Route>


      </Routes>
      <Footer />
    </>

  )
}
export default App;
