import React, {useEffect, useState} from 'react'
import './style.scss'

import Main from '../body/body'

const searchImg = import.meta.env.VITE_SEARCH_IMG_PATH
const logo = import.meta.env.VITE_LOGO_PATH;


export const Side = ({activeSideMenu}) => {
    
    const setAtiveSideBar = activeSideMenu ? 'side active' : 'side'
    
    return ( 
            <aside className={setAtiveSideBar}>
                <div className="side__wrapper">

                    <a href="#" className="side__link">
                        <div className="side__logo">
                            <img src={logo} alt="Logo" />
                            BookFinder
                        </div>
                    </a>

                    <label htmlFor="book"><span>What's book  your saerch</span></label>
                    
                    <div className="side__search">
                        <input 
                        type="text" 
                        name="book" 
                        className="side__input" 
                        required autocomplete="off"
                        // value = {search} onChange = {e => setSearch(e.target.value)} 
                        // onKeyUp = {searchBook} 
                        /> 
                        
                        <button className='button--search'>
                            <img src={searchImg}  alt="search button" />
                        </button>
                    </div>
                </div>

                <div className="side__footer">
                    © 2022 BookFinder
                </div>
            </aside>
    );
}
 
export default Side;