import React from 'react'

import Item from './item/item';
import "./style.scss"


const List = (props) => {
    return ( 
        <div className='list'>
            <Item book = {props.book}/>
        </div>
     );
}
 
export default List;
