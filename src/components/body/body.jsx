import React from 'react'
import Item from './item/item';
import Pagination from './pagination/Pagination';
import './style.scss'




const Main = ({book, loading, booksItemsPage, totalBook, paginate, onItemClick }) => {
    return ( 
        <main className='main'>
            <div className="main__title">All Playlists</div>

            <div className="main__wrapper">
                <Item book = {book} loading = {loading} onItemClick = {onItemClick}/>
            </div>

            <Pagination booksItemsPage = {booksItemsPage} totalBook = {totalBook} paginate= {paginate}/>
            
        </main>
     );
}
 
export default Main;