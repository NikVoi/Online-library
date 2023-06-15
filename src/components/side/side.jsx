import React, {useState} from 'react'
import axios from 'axios'
import './style.scss'


import img from  './search.svg'
import Main from '../body/body'

import logo from '../../assets/img/logo.png'
import logo_2 from './logo.png'

const Side = () => {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    const searchBook = (event) => {
        if(event.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyDpmPa3U0TIf9-iSNdXmLGfu34u6HJM6Ok&maxResults=10')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return ( 
        <>
            <aside className="side">
                <div className="side__wrapper">

                <a href="#" className='side__link'>
                    <div className="side__logo">
                        <img src={logo} alt="Logo" />
                        BookFinder
                    </div>
                </a>



                    <label htmlFor="book"><span>What's book  your saerch</span></label>
                    
                    <div className="side__search">
                        <input type="text" name="book" className="side__input" required autocomplete="off"
                        value = {search} onChange = {e => setSearch(e.target.value)} onKeyUp = {searchBook} /> 
                        
                        <button className='button--search'>
                            <img src={img}  alt="search button" />
                        </button>
                    </div>
                </div>
            </aside>


            <Main book = {bookData}/>
        </>
    );
}
 
export default Side;