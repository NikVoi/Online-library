import React from 'react'
import './style.scss';


const Item = ({book, loading}) => {
    console.log(book)

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
                                <div className='item' key={item.id}>
                                <a href='#' className="item__link">
                                    <div className="item__img">
                                        <img src={thumbnail} alt="book img" />
                                    </div>
                                    <div className="item__name">
                                       {item.volumeInfo.authors} 
                                    </div>
                                    <div className="item__descr">
                                    </div>
                                    <div className="item__writer">
                                        {/* {item.volumeInfo.} */}
                                    </div>
                                    </a>
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