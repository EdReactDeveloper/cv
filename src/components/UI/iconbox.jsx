import React from "react";
import Icon from "../UI/Icon";
import { Product } from "../UI/Selection";
import { ProductConsumer } from "../UI/context";
const iconbox = (props) => {
  console.log('iconbox props: ', props.inCart)
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className={`iconbox ${props.className}-iconbox`}>
            <Icon d={Product.internet} className="iconbox-icon" />
            {props.inCart ? (
              <div className="iconbox-icon__incart">in cart</div>
            ) : (
              <Icon
                d={Product.cart}
                className="iconbox-icon"
                clicked={() => value.inCart(props.id)}
              />
            )}

            <Icon d={Product.heart} className="iconbox-icon" />
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default iconbox;
