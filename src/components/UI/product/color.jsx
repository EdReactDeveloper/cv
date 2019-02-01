import React, { Component } from 'react';
import MyContext from '../../../container/context';

class Colors extends Component {
    static contextType = MyContext
    
    render() {
        const {data} = this.props
        return (
            <div className="colors__wrapper">
            <span className="colors__label">Size</span>
            <div className="colors__list">
              {data.sizes.map((item, i) => (
                  <button key={i}
                  style={{color: item.active ? 'orange' : ''}}
                    className="colors__item"
                    onClick={() => this.context.choooseHandler(data.id, item, 'sizes')}
                  >
                    {item.name}
                  </button>  
              ))}
            </div>
            </div>
        );
    }
}

export default Colors;
