import {React, useState, useEffect} from 'react'
import { Route, Routes , redirect} from 'react-router-dom'
import axios from 'axios'

import Side from './components/Side/Side'
import Main from './components/body/body'
import Header from './components/header/header'
import CardBook from './components/CardBook/CardBook'
import NotFound from './components/NotFound/NotFound'

const apiStart = import.meta.env.VITE_API_PATH_START
const apiEnd = import.meta.env.VITE_API_PATH_END

const app = () => {

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [booksItemsPage] = useState(15)

    // state & func for search books
    const [bookData, setData] = useState([])
    const [search, setSearch] = useState("")

    const searchBook = (event) => {
        if(event.key === "Enter") {
            axios.get(apiStart + search + apiEnd)
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    // Hook for get info with API
    useEffect(()=>{
        const getBook = async () => {
            setLoading(true)
            const res = await axios.get(apiStart + 'JS' + apiEnd)
            setData(res.data.items)
            setLoading(false)
        }
        getBook()
    }, [])  

    // get number pages & current page
    const lastBookIndex = currentPage * booksItemsPage
    const firstBookIndex = lastBookIndex - booksItemsPage
    const currentBooks = bookData.slice(firstBookIndex, lastBookIndex)

    // realization pagination
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // set active side bar on mobile page
    const [activeSideMenu, setMenuActive] = useState(false)

    const setActiveMenu = activeSideMenu ? 'potishion state' : 'potishion'

    const handleItemClick = item => {
        setSelectedItem(item);
    };
    
    const [selectedItem, setSelectedItem] = useState(null);
    
    const handleSortChange = (sortedBooks) => {
        console.log(sortedBooks)
    };

    return ( 
        <div className={setActiveMenu}>

            <Side 
                activeSideMenu = {activeSideMenu}
                bookData = {bookData}
                onSortChange = {handleSortChange}
                search = {search}
                setSearch = {setSearch}
                searchBook = {searchBook}
            />

            <Header activeSideMenu= {activeSideMenu} setMenuActive = {setMenuActive}/>

            <Routes>
                <Route path="/" element= { 
                    <div className='wrapper__body'>
                        <Main
                            book = {currentBooks} 
                            loading = {loading}
                            booksItemsPage = {booksItemsPage}
                            totalBook = {bookData.length}
                            paginate = {paginate}
                            onItemClick = {handleItemClick}/>
                    </div>
                }/>
                    
                <Route path = '/About' element = {<CardBook selectedItem = {selectedItem} />}/>  
                <Route path = '*' element = {<NotFound/>}/>

            </Routes> 

        </div>

    );
}


export default app;