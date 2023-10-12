import axios from "axios";
import React, { useCallback, useEffect } from "react";
import useRazorpay from "react-razorpay";

export const Buypremium = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  const payHandler = async () => {
    const order = await axios.get(
      "http://localhost:3002/api/v1/users/create-order"
    );
    const { amount, id } = order.data.data;

    console.log(amount, id, "ffffffffffffffffff");
    const options = {
      key: "rzp_test_xA8tvtsuxJ1pJb",
      amount,
      order_id: id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  return (
    <div>
      <button onClick={payHandler} className="bg-red-700 p-4 ">
        BY Premium
      </button>
    </div>
  );
};
