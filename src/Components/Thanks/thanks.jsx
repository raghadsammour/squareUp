import { useNavigate } from 'react-router-dom';
import './thanks.css'

export default function Thanks({title ,Text}){
const navigate = useNavigate();
        
    return(
            <section className='Thank'>
            <img src="src\assets\Icons\logoSquareUP.png" alt="logo" className='logo'/> 
            <h1 className='titel'>{title}</h1>
            <p className='discription'>{Text}</p>
            
             <button className='but_start' onClick={() => navigate('/contact')}>Start Project</button>
             <img src="src\assets\imgs\Home\thank you.webp" alt="bg_thank" className='bg_thank' />
        </section>
    )
}