import React from 'react'
import "./Card.css"
const Card = ({id,title,description}) => {
  return (
    <div className='RB_card'>
        <div className="RB_info">
          <p className='RB_id'>0{id}</p>
          <span className='RB_title'>{title}</span>
        </div>
        <p className='RB_description'>{description}</p>
    </div>
  )
}

export default Card