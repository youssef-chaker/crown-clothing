import React from "react";
import "./checkout-item.style.scss";
import { removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ checkoutItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(checkoutItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
