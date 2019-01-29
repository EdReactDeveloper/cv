import React from 'react';
import {Link} from 'react-router-dom'; 
const autocomplete = (props) => {
    return (
        <ul className={`autocomplete__list 
        ${props.list.length < 1 ? 'hidden' : 'visible'}`}>
            {
                props.list.slice(0,7).map((item, i)=>(
                    <Link to={`/products/${item.id}`} key={i}>
                    <li className="autocomplete__item">
                    <div className="autocomplete__imagebox">
                    <img src={item.images[0]} alt="is missing" className="autocomplete__img"/>
                    </div>                    
                    <h3 className="autocomplete__heading">{item.heading}</h3>
                    <div className="autocomplete__price">${item.price}</div>
                    </li>
                    </Link>
                ))
            }
        </ul>
    );
};

export default autocomplete;