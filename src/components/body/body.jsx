import React from 'react'
import './style.scss'
import Item from './item/item';
import Header from '../header/header'
import Pagination from './pagination/Pagination';


const Main = ({book, loading, booksItemsPage, totalBook, paginate}) => {
    return ( 
        <div className='wrapper__body'>
            <Header />

            <main className='main'>
                <div className="main__title">All Playlists</div>

                <div className="main__wrapper">
                    <Item book = {book} loading = {loading}/>
                </div>

                <Pagination booksItemsPage = {booksItemsPage} totalBook = {totalBook} paginate= {paginate}/>
                
            </main>

        </div>

     );
}
 
export default Main;