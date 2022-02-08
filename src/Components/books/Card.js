import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../Redux/Reducer/Reducer";
import BookData from "../../books.json";

function Card(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="main">
        <a
          href="javascript"
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            style={{ objectPosition: "top" }}
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={props.image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            Author : {props.author}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium text-edit">
            {props.title}
          </h2>
          <p className="mt-2">Language: {props.lan} </p>
          <p className="mt-1">Pages: {props.pages} </p>
          <button
            className="flex  mt-10 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded"
            onClick={() => dispatch(CartActions.AddCart(BookData[props.id]))}
          >
            Add+
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
