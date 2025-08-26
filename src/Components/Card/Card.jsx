import React from 'react'
import "./Card.css"
const Card = ({id,title,description,className=""}) => {
  let x=0
  if(id>=0 && id<10){
    x="0"+id;
  }
  else{
    x=id
  }
  return (
    <div className={className}>
        <div className="RB_info">
          <p className='RB_id'>{x}</p>
          <span className='RB_title'>{title}</span>
        </div>
        <p className='RB_description'>{description}</p>
    </div>
  )
}

export default Card