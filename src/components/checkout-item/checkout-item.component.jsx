import React from "react";
import "./checkout-item.style.scss";
import { removeItem, addItem, reduceItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ checkoutItem, removeItem, addItem, reduceItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(checkoutItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(checkoutItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(checkoutItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
