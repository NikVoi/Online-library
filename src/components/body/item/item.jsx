import React from 'react'
import './style.scss';

import {Link} from 'react-router-dom';

const Item = ({book, loading, onItemClick }) => {
    if (loading) {
        return (
            <div className="loader">
                <div className="book">
                    <div className="book__pg-shadow"></div>
                    <div className="book__pg"></div>
                    <div className="book__pg book__pg--2"></div>
                    <div className="book__pg book__pg--3"></div>
                    <div className="book__pg book__pg--4"></div>
                    <div className="book__pg book__pg--5"></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='List'> 
                {
                    book.map((item) => {
                        let thumbnail = item.volumeInfo.imageLinks &&  item.volumeInfo.imageLinks.smallThumbnail
                        if (thumbnail != undefined){
                            return (
                                <div className='item' key={item.id} onClick={() => onItemClick(item)}>
                                    <Link to='/About' className="item__link" >
                                        <div className="item__img">
                                            <img src={thumbnail} alt="book img" />
                                        </div>
                                        <div className="item__name">
                                            {item.volumeInfo.title} 
                                        </div>
                                        <div className="item__descr">
                                            {item.volumeInfo.categories}
                                        </div>
                                        <div className="item__writer">
                                            {item.volumeInfo.authors}
                                            {/* .join(' ') */}
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })
                
                }
            </div>
         );
    }
}
 
export default Item;