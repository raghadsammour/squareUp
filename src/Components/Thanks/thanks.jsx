import './thanks.css'
import logoSquare from "../../assets/Icons/logoSquare.svg"
import { Link } from 'react-router-dom'
export default function Thanks({title ,Text}){
    
    return(
        <div className='thankPosition'>
          <section className='Thank'>
  <div className='thankDiv' >

<div className='bglogothank logoAboutThank'>

<img src={logoSquare} />
</div>
<div className='thanksParagraph'>

            <h1 className='titleThank'>{title}</h1>
            <p className='discription'>{Text}</p>
</div>
            </div>
   
       <div className="pattern"></div>
        </section>
  <Link to="/contact" className="but_start">
          Start Project
        </Link>

        </div>
    )
}