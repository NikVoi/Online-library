import React from 'react'
import './style.scss'
import Header from '../header/header';

const mainpage = "https://library-it.com/wp-content/uploads/2020/12/ilja_kantor_sovremennyj_uchebnik-1chast.jpg"

const CardBook = ({book}) => {
    return ( 
        <>
            <Header />

            <div className="card">
                
                <div className="card__left">
                    <div className="card__name">{book.name}</div>
                    <div className="card__author">{book.auth}</div>
                    <div className="card__categories">{book.catal}</div>
                    <div className="card__description">
                        {book.description}
                    </div>
                </div>
                <div className="card__right">
                    <img src={mainpage} alt="Book image" />
                </div>
            </div>
        </>
    );
}
 
export default CardBook;