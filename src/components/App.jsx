import {React, useState, useEffect} from 'react'
import Side from "./Side/Side"
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import Main from './body/body'

const apiStart = import.meta.env.VITE_API_PATH_START
const apiEnd = import.meta.env.VITE_API_PATH_END

const app = () => {
    
    const [bookData, setData] = useState([])

    // state & func for search books
    
    // const [search, setSearch] = useState("")
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
    return ( 
        <div className={setActiveMenu}>
            <Side activeSideMenu = {activeSideMenu} />

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

{/* <Side />
// <Routes>
//     <Route path="/" element={<Side />}/>
//     {/* <Route path='/' element={<Side/>} /> */}
// </Routes> }
export default app;