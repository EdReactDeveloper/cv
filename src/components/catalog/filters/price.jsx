import React from 'react';

const price = (props) => {
    const price = props.price
    return (
        <div className="pricefilter__wrapper">
            <h3 className="filters__heading">
            Price Filter
            </h3>
            <div className="pricefilter__inputwrapper">
            <label htmlFor="from" className="pricefilter__label">
            From <input type="text" value={price.from} className="pricefilter__input"/>
            </label>
            <label htmlFor="from" className="pricefilter__label">
            To <input type="text" value={price.to} className="pricefilter__input"/>
            </label>
            </div>
            
        </div>
    );
};

export default price;