import React from 'react'
import {Link} from 'react-router-dom';
import style from './style.scss'

const NotFound = () => {
    return ( 
        <div className='Error'>
            <h1>404</h1>
            
            <h2>Not found</h2>

            <Link to='/'>
                <button className='button'>Back to home page</button>
            </Link>
        </div>
    );
}
 
export default NotFound;