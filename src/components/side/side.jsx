import React, {useState} from 'react'
import axios from 'axios'
import './style.scss'


import img from  './search.svg'
import Main from '../body/body'

const Side = () => {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    const searchBook = (event) => {
        if(event.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyDpmPa3U0TIf9-iSNdXmLGfu34u6HJM6Ok&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return ( 
        <>
            <aside className="side">
                <div className="side__wrapper">
                    <div className="side__search">
                            <label htmlFor="book"><span>What's book  your saerch</span></label>
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