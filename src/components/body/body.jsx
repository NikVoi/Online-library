import React from 'react'
import List from './list/list';
import './style.scss'



const Main = (props) => {
    return ( 
        <main className='main'>
            <div className="main__title">LOGO Playlists</div>

            <List book = {props.book}/>
        </main>
     );
}
 
export default Main;