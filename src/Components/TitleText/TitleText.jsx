import './TitleText.css';

const TitleText = ({ title, text ,image}) => {
  return (
    <div className='bigdiv'>
  <div 
  className="title-text-container"
  style={{
    backgroundImage: ` url(${image})`
  }}
>
<div className='service-paragraph'>
  <p className="title-service">{title}</p>
  <p className="text-service">{text}</p>
</div>

</div>
  <div className="pattern"></div>
    </div>
  

  );
};

export default TitleText;
