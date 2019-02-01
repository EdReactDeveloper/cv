import React from "react";
import Icon from "./Icon";
import { Product } from "./Selection";
import { ProductConsumer } from "../../../container/context";
const iconbox = (props) => {
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
