import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './style.scss'

import Main from '../body/body'

const logo = import.meta.env.VITE_LOGO_PATH;
const searchImg = import.meta.env.VITE_SEARCH_IMG_PATH
const apiStart = import.meta.env.VITE_API_PATH_START
const apiEnd = import.meta.env.VITE_API_PATH_END

const Side = () => {

    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    // const searchBook = (event) => {
    //     if(event.key === "Enter") {
    //         axios.get(apiStart + search + apiEnd)
    //         .then(res => setData(res.data.items))
    //         .catch(err => console.log(err))
    //     }

    // }

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [booksItemsPage] = useState(12)

    useEffect(()=>{
        const getBook = async () => {
            setLoading(true)
            const res = await axios.get(apiStart + 'JS' + apiEnd)
            setData(res.data.items)
            setLoading(false)
        }
        getBook()
    }, [])


    const lastBookIndex = currentPage * booksItemsPage
    const firstBookIndex = lastBookIndex - booksItemsPage
    const currentBooks = bookData.slice(firstBookIndex, lastBookIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)


    const [activeSideMenu, setMenuActive] = useState(false)

    return ( 
        <div className={activeSideMenu ? 'potishion state' : 'potishion'}>
            <aside className={activeSideMenu ? 'side active' : 'side'}>
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

            <Main 
              book = {currentBooks} 
              loading = {loading}
              booksItemsPage = {booksItemsPage}
              totalBook = {bookData.length}
              paginate = {paginate}
              activeSideMenu = {activeSideMenu}
              setMenuActive = {setMenuActive}
            />
        </div>
    );
}
 
export default Side;