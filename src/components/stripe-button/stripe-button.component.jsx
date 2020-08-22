import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("payment successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIuhBDLTEPApDtqnIub94jpeVcuIL50yvOlBjOCu7MiC5YbZX1LHoedGPLy1OGkYNNdDV2HSttLAklCV39PWi6i00jA1bIgl7";
  return (
    <StripeCheckout
      label="Pay now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
