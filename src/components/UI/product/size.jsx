import React, { Component } from 'react';
import MyContext from '../../../container/context';

class Sizes extends Component {
    static contextType = MyContext;
    render() {
        const {data} = this.props
        return (
            <div className="size__wrapper">
          <span className="size__label">Color</span>
          <div className="size__list">
          {data.colors.map((item, k) => (
              <div
              style={{background: item.name, border: item.active ? '3px solid #000' : ''}}
                className="size__item"                
                onClick={() => this.context.choooseHandler(data.id, item, 'colors')}
                key={k}
              />
            ))}
          </div>
        </div>
        );
    }
}

export default Sizes;