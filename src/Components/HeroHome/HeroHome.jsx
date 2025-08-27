import { Link } from 'react-router-dom'
import './herohome.css'
const HeroHome = ({image,title,btn1,btn2,description}) => {

    return (
        <div className="RB_HeroHome">
            <div className="RB_ImgWrapper">
                <img src={image} alt="mountain" />
            </div>
            <h1 className='RB_Title'>{title}</h1>
            <p className='RB_Paragraph'>For <span>Startups</span> , <span>Enterprise leaders</span> , <span>Enterprise leaders</span> and <span>Social Good</span></p>
            <div className="RB_Btns">
                <Link to="/work" className='RB_Btn' >{btn1}</Link>
                <Link to="/contact" className='RB_Btn' >{btn2}</Link>
            </div>
            <p className='RB_Description'>{description}</p>
        </div>
    )
}
export default HeroHome