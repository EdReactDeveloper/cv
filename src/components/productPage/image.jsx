import React from 'react';

const image = (props) => {
    const data = props.data;
    const image = props.image

    const chooseImage=(i)=>{
        props.chooseImage(i)
    }
    return (
        <div className="productImage__left">
        <div className="productImage__left-img--wrapper">
          <img
            src={image}
            alt="image is missing"
            className="productImage__left-img"
          />
        </div>

        <div className="productImage__left-tmbbox">
          {data.map((item, i) => (
            <button
              className="productImage__left-tmbwrapper"
              onClick={() => chooseImage(i)}
              key={i} >
              <img
                src={item}
                alt="image is missing"
                className="productImage__left-tmb"
              />
            </button>
          ))}
        </div>
      </div>
    );
};

export default image;