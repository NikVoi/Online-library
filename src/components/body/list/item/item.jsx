import React from 'react'
import './style.scss';


const Item = (props) => {
    console.log(props.book)

    return (
        <> 
            {
                props.book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks &&  item.volumeInfo.imageLinks.smallThumbnail
                    if (thumbnail != undefined){
                        return (
                            <div className='item'>
                                <a href='#' className="item__link">
                                    <div className="item__img">
                                        <img src={thumbnail} alt="book img" />
                                    </div>
                                    <div className="item__name">
                                        {item.volumeInfo.authors}
                                    </div>
                                    <div className="item__descr">
                                        {item.volumeInfo.subtitle}
                                    </div>
                                    <div className="item__writer">
                                        {/* {item.volumeInfo.} */}
                                    </div>
                                </a>
                            </div>
                        )
                    }
                })
            }
        </>
     );
}
 
export default Item;