import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
