import React from 'react'
import "./ContactIcon.css"
const ContactIcon = ({path,image,content}) => {
  return (
    <div className="RB_Icon">
            <a href={path}><img src={image} alt="photo" /></a>
            <a href={path}>{content}</a>
        </div>
  )
}

export default ContactIcon