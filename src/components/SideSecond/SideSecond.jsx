import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const logo = import.meta.env.VITE_LOGO_PATH;

export const Side = ({activeSideMenu}) => {
    
    const setAtiveSideBar = activeSideMenu ? 'side active' : 'side'
    
    return ( 
        <aside className={setAtiveSideBar}>
            <div className="side__wrapper">
                <Link to='/' className="side__link">
                    <div className="side__logo">
                        <img src={logo} alt="Logo" />
                        BookFinder
                    </div>
                </Link>
            </div>

            <div className="side__footer">
                © 2022 BookFinder
            </div>
        </aside>
    );
}
 
export default Side;