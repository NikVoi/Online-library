import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'


const Pagination = ({booksItemsPage, totalBook, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalBook / booksItemsPage); i++) {
        pageNumbers.push(i)
    }

    return ( 
        <div className="pagination">
            {
                pageNumbers.map(number => (
                    <div className="pagination__item" key={number}>
                        <Link to="/" className='pagination__item-link' onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Pagination;