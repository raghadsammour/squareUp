import "./AboutPage.css"
import { Link, Outlet } from 'react-router-dom'
import TableCrud from '../../Components/TableCrud/TableCrud'

const AboutPage = () => {
  return (
    <>
        <Link to="/Dash/editabout/aboutform" className="AddService">
        <button>Add New</button>
      </Link>
      <div className="RB_Flex_About">
        <Outlet/>
        <TableCrud
            storageItems="itemsAbout"
            editRoute="/dash/editabout/editformabout"
            goTo="/about"
          />
      </div>
    </>
  )
}

export default AboutPage