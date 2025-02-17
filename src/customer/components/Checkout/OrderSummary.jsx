import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cart from "../product/Cart/Cart";

const OrderSummary = () => {
  return (
    <div>
      <div className="border rounded-xl shadow-2xl">
        <AddressCard />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default OrderSummary;
