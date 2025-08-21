import './herohome.css'
const HeroHome = ({image,title,btn1,btn2,description}) => {
    const goToWork=()=>{
        window.location.replace("/work")
    }
    const goToContact=()=>{
        window.location.replace("/contact")
    }
    
    return (
        <div className="heroHome">
            <div className="RB_ImgWrapper">
                <img src={image} alt="mountain" />
            </div>
            <h1 className='title'>{title}</h1>
            <p className='paragraph'>For <span>Startups</span> , <span>Enterprise leaders</span> , <span>Enterprise leaders</span> and <span>Social Good</span></p>
            <div className="btns">
                <button className='btn' onClick={goToWork}>{btn1}</button>
                <button className='btn' onClick={goToContact}>{btn2}</button>
            </div>
            <p className='description'>{description}</p>
        </div>
    )
}
export default HeroHome