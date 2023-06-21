import React from 'react'
import './style.scss'

const mainpage = "https://library-it.com/wp-content/uploads/2020/12/ilja_kantor_sovremennyj_uchebnik-1chast.jpg"

const CardBook = ({selectedItem}) => {
    let thumbnail = selectedItem.volumeInfo.imageLinks &&  selectedItem.volumeInfo.imageLinks.smallThumbnail
    return ( 
        <>
            <div className="card">
                
                <div className="card__left">
                    <div className="card__name">{selectedItem.volumeInfo.title}</div>
                    <div className="card__author">{selectedItem.volumeInfo.authors.join(' ')}</div>
                    <div className="card__categories">{selectedItem.volumeInfo.categories}</div>
                    <div className="card__description">
                        {selectedItem.volumeInfo.description}
                    </div>
                </div>
                <div className="card__right">
                    <img src={thumbnail} alt="Book image" />
                </div>
            </div>
        </>
    );
}
 
export default CardBook;