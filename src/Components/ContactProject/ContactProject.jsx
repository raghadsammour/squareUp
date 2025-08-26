import React from 'react'
import "./ContactProject.css"
import square from "../../assets/Icons/square.svg"
const ContactProject = () => {
  return (
    <div className='RB_Project'>
        <div className="RB_Project_First">
            <div className="RB_Img">
                <img src={square} alt="square" />
            </div>
            <div className="RB_Info">
                <h3>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
                <p>Combining the power of design, engineering, and project management to create transformative
                    digital experiences. They invite you to join them on their journey and discover how they 
                    can help bring your digital ideas to life.
                </p>
            </div>
        </div>
        <div className="RB_Project_Second">
            <div className='RB_Container_Description'>
                <p className='RB_First'>
                Welcome to SquareUp
            </p>
            <div className='RB_Second'>Where collaboration, 
                    Expertise, and Client-Centricity 
                    Intersect to Shape the Future of 
                    Digital Innovation.
                </div>
            </div>
            <button>Start Project</button>
        </div>
    </div>
  )
}

export default ContactProject