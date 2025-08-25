import "./ContactSocilaIcons.css"
const ContactSocialIcons = ({description,imageface,alternativef,imagex,alternativex,imagein,alternativein}) => {
  return (
    <div className='RB_SocialIcons'>
        <p className='RB_Description'>{description}</p>
        <div className="RB_ImageWrapper">
            <div className="RB_Image"><img src={imageface} alt={alternativef} /></div>
            <div className="RB_Image"><img src={imagex} alt={alternativex} /></div>
            <div className="RB_Image"><img src={imagein} alt={alternativein} /></div>
        </div>
    </div>
  )
}

export default ContactSocialIcons