import React, { useState } from 'react'

import './style.scss'

const Header = ({setMenuActive, activeSideMenu}) => {

    const [activeMenuButton, setmenuButton] = useState(false)

    return ( 
        <div className='header'>
            <div className= {activeMenuButton ? 'header__mobile active' : 'header__mobile'} onClick={() => {
                setMenuActive(!activeSideMenu)
                setmenuButton(!activeMenuButton)
            }}>
                <span></span>
            </div>

            <div className="header__titel">
                Search for books
            </div>     
        </div>
     );
}
 
export default Header;