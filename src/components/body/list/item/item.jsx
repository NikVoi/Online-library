import React from 'react'
import './style.scss';


const Item = () => {
    return ( 
        <div className='item'>
            <a href='#' className="item__link">
                <div className="item__img">
                    <img src="https://cdn1.ozone.ru/s3/multimedia-v/6114692215.jpg" alt="book img" />
                </div>
                <div className="item__name">
                    js basik
                </div>
                <div className="item__descr">
                    computers
                </div>
                <div className="item__writer">
                    devid lesli
                </div>
            </a>
        </div>
     );
}
 
export default Item;