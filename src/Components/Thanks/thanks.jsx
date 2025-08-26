import { useNavigate } from 'react-router-dom';
import './thanks.css'
import logoSquare from "../../assets/Icons/logoSquare.svg"
export default function Thanks({title ,Text}){
const navigate = useNavigate();
        
    return(
          <section className='Thank'>
  <div className='thankDiv' >

<div className='bglogothank'>

<img src={logoSquare} />
</div>
<div className='thanksParagraph'>

            <h1 className='title'>{title}</h1>
            <p className='discription'>{Text}</p>
</div>
            
             <button className='but_start' onClick={() => navigate('/contact')}>Start Project</button>
           
            </div>
   
       <div className="pattern"></div>
        </section>
    )
}