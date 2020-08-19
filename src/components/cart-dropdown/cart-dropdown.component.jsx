import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>Go to checkout</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
