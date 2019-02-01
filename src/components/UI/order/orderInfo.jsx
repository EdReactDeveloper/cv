import React from 'react';

const orderInfo = ({item}) => {
    return (
        <div className="order__info">
        <div>total: </div><div>{item.total}</div>
        <div>quantity</div><div>{item.count}</div>
        <div>size: </div><div>{item.selectedSize}</div>
        <div>color: </div><div className="order__color"
        style={{ background: item.selectedColor }}
        ></div>
        </div>
    );
};

export default orderInfo;