import React from 'react';
import Icons from '../UI/iconbox'; 

const productDescription = (props) => {
    const data = props.data; 
    console.log('description: ',data)
    return (
        <div className="productPage__right">
              <h3 className="productPage__right-heading">{data.heading}</h3>
              <span className="productPage__right-subheading">{data.subheading}</span>
              <div className="productPage__right-description">{data.description}</div>

              <div className="productPage__right-options--wrapper">
                <div className="productPage__right-options--left">
                  <span className="productPage__right-options--label">
                    Choose Size
                  </span>
                  <div className="productPage__right-options--buttons">
                    {data.sizes.map((item, i) => (
                      <div
                        className="productPage__right-options--button-wrapper"
                        key={i}
                      >
                        <button className="productPage__right-options--button">
                          {item}
                        </button>
                        <span className="productPage__right-options--dash">-</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="productPage__right-options--right">
                  <span className="productPage__right-options--label">
                    Choose Quantity
                  </span>
                  <button className="productPage__right-options--calc">+</button>
                  <div className="productPage__right-options--number">
                    {data.quantity}
                  </div>
                  <button className="productPage__right-options--calc">-</button>
                </div>
              </div>

              <div className="productPage__right-order--wrapper">
                <div className="productPage__right-order--price">
                  Price: ${data.price}
                </div>
                <Icons className="productPage" id={data.id} inCart={data.inCart} />
                <button className="productPage__right-order--button">Order Now</button>
              </div>
            </div>
    );
};

export default productDescription;