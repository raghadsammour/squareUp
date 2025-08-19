import React from 'react'
import "./Header.css"
const Header = (props) => {
    return (
        <header className='RB_Header'>
            {props.children}
        </header>
    )
}

export default Header