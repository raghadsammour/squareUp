import "./ProcessPage.css"
import TableCrud from '../../Components/TableCrud/TableCrud'
import { Link, Outlet } from 'react-router-dom'

const ProcessPage = () => {
  return (
    <>    
          <Link to="/Dash/editprocess/processform" className="AddService">
        <button>Add New</button>
      </Link>
          <div className='RB_Flex'>
            <Outlet />
            <TableCrud
            storageItems="items"
            editRoute="/dash/editprocess/editform"
          />
          </div>
    </>
  )
}

export default ProcessPage