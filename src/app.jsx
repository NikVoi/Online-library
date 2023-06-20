import {React, useState, useEffect} from 'react'
import { Route, Routes , redirect} from 'react-router-dom'
import axios from 'axios'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Side from './components/Side/Side'
import Main from './components/body/body'
import Header from './components/header/header'


const apiStart = import.meta.env.VITE_API_PATH_START
const apiEnd = import.meta.env.VITE_API_PATH_END

const app = () => {
    
    
    // state & func for search books
    
    const [bookData, setData] = useState([])
    const [search, setSearch] = useState("")
    // const searchBook = (event) => {
    //     if(event.key === "Enter") {
    //         axios.get(apiStart + search + apiEnd)
    //         .then(res => setData(res.data.items))
    //         .catch(err => console.log(err))
    //     }
    // }

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [booksItemsPage] = useState(15)

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


    return ( 
        <Routes>
            <Route path="/" element= { 
                <div className={setActiveMenu}>
                    <Side activeSideMenu = {activeSideMenu} />
                
                    <div className='wrapper__body'>
                
                        <Header 
                            activeSideMenu = {activeSideMenu} 
                            setMenuActive = {setMenuActive}
                        />
                    
                        <Main
                            book = {currentBooks} 
                            loading = {loading}
                            booksItemsPage = {booksItemsPage}
                            totalBook = {bookData.length}
                            paginate = {paginate}
                            onItemClick = {handleItemClick}
                        />
                    </div>
                </div>
             }
            />
                
            <Route path = '/About'
                element = {
                    <AboutPage  
                            selectedItem = {selectedItem} 
                            activeSideMenu = {activeSideMenu} 
                            setMenuActive = {setMenuActive}
                        />
                    }
            />  
        </Routes> 
    );
}


export default app;