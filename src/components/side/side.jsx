import React from 'react'
import './style.scss'


import img from  './search.svg'

const Side = () => {
    return ( 
        <aside className="side">
             <div className="side__wrapper">
                <div className="side__search">
                    <form className='form__input'>

                        
                        <label for="book"><span>What's book  your saerch</span></label>
                        <input type="text" name="book" className="side__input" required autocomplete="off"  /> 
                        
                        <button className='button--search'>
                            <img src={img}  alt="search button" />
                        </button>
                    </form>
                </div>
            </div>
        </aside>
    );
}
 
export default Side;