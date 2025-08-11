import './TitleText.css';

const TitleText = ({ title, text, overlay ,image}) => {
  return (
  <div 
  className="title-text-container"
  style={{
    backgroundImage: `url(${overlay}), url(${image})`
  }}
>
<div className='service-paragraph'>
  <p className="title-service">{title}</p>
  <p className="text-service">{text}</p>
</div>

</div>

  );
};

export default TitleText;
