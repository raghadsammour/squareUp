import './herohome.css'
const HeroHome = ({image,title,btn1,btn2,description}) => {
    const goToWork=()=>{
        window.location.replace("/work")
    }
    const goToContact=()=>{
        window.location.replace("/contact")
    }
    
    return (
        <div className="RB_HeroHome">
            <div className="RB_ImgWrapper">
                <img src={image} alt="mountain" />
            </div>
            <h1 className='RB_Title'>{title}</h1>
            <p className='RB_Paragraph'>For <span>Startups</span> , <span>Enterprise leaders</span> , <span>Enterprise leaders</span> and <span>Social Good</span></p>
            <div className="RB_Btns">
                <button className='RB_Btn' onClick={goToWork}>{btn1}</button>
                <button className='RB_Btn' onClick={goToContact}>{btn2}</button>
            </div>
            <p className='RB_Description'>{description}</p>
        </div>
    )
}
export default HeroHome