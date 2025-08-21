
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
import TrashPage from './Pages/TrashPage/TrashPage';
import AdminPage from './Pages/Admin/AdminPage';
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
        <Route path="/admin" element={<AdminPage />} />
        <Route path='/dashboard' element={<Dashboard />} >
        <Route path='/dashboard/editform/:id' element={<EditForm />} />
        <Route path='/dashboard/editformabout/:id' element={<EditFormAbout />} />
        </Route>
      </Routes>
      <Footer />

    </>

  )
}
export default App;
