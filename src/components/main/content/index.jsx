import React, { Component } from 'react';
import NewArrivals from './newArrivals';
import BestSales from './bestSales';

class Content extends Component {
    render() {
        return (
            <div className="content">
            <div className="container">
                <NewArrivals />
                <BestSales />
            </div>
            </div>            
        );
    }
}

export default Content;