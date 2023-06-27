import React, { useState } from 'react'

import './style.scss'

const Header = ({setMenuActive, activeSideMenu}) => {

    const [activeMenuButton, setMenuButton] = useState(false)

    return ( 
        <div className='header'>
            <div className= {activeMenuButton ? 'header__mobile active' : 'header__mobile'} onClick={() => {
                setMenuActive(!activeSideMenu)
                setMenuButton(!activeMenuButton)
            }}>
                <span></span>
            </div>

            <div className="header__title">
                Search for books
            </div>     
        </div>
     );
}
 
export default Header;