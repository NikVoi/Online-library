import React from 'react'
import './style.scss';

import {Link} from 'react-router-dom';

const Item = ({book, loading, onItemClick }) => {

    if (loading) {
        return (
            <h2>Lodaing...</h2>
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
                    
    
    
                    // props.book.map((item) => {
                    //     let thumbnail = item.volumeInfo.imageLinks &&  item.volumeInfo.imageLinks.smallThumbnail
                    //     if (thumbnail != undefined){
                    //         return (
                    //             <div className='item'>
                    //                 <a href='#' className="item__link">
                    //                     <div className="item__img">
                    //                         <img src={thumbnail} alt="book img" />
                    //                     </div>
                    //                     <div className="item__name">
                    //                         {item.volumeInfo.authors}
                    //                     </div>
                    //                     <div className="item__descr">
                    //                         {item.volumeInfo.subtitle}
                    //                     </div>
                    //                     <div className="item__writer">
                    //                         {/* {item.volumeInfo.} */}
                    //                     </div>
                    //                 </a>
                    //             </div>
                    //         )
                    //     }
                    // })
                }
            </div>
         );
    }
}
 
export default Item;