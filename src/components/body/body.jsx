import React from 'react'
import Item from './item/Item';
import Pagination from './pagination/Pagination';
import './style.scss'

const Main = ({loading, booksItemsPage, totalBook, paginate}) => {
    return ( 
        <main className='main'>
            <div className="main__title">All Playlists</div>

            <div className="main__wrapper">
                <Item loading = {loading}/>
            </div>

            <Pagination booksItemsPage = {booksItemsPage} totalBook = {totalBook} paginate= {paginate}/>
            
        </main>
     );
}
 
export default Main;