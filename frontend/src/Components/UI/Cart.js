import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../Redux/Reducer/Reducer";

function Cart() {
  const dispatch = useDispatch();
  const Item = useSelector((state) => state.Item);
  const [Auth, setAuth] = useState(true);

  useEffect(() => {
    if (Item.length == 0) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <>
      <div className="container px-2 py-5">
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0"
          onClick={() => dispatch(CartActions.ShowCart())}
        >
          Close
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>

        {Auth && (
          <h3
            style={{
              textAlign: "center",
              marginTop: "10rem",
              fontSize: "4.5rem",
            }}
          >
            Zero! Item in Cart
          </h3>
        )}
      </div>
    </>
  );
}

export default Cart;
