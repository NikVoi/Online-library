import React from 'react'
import List from './list/list';
import './style.scss'



const Main = () => {
    return ( 
        <main className='main'>
            <div className="main__title">LOGO Playlists</div>

            <List/>
        </main>
     );
}
 
export default Main;