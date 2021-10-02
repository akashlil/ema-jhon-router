import React from "react";
import Rating from "react-rating";

const ReviewProduct = (props) => {
  const { name, seller, price, stock, star, key } = props.productreview;
  return (
    <div className="product">
      <div className="m-5">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
        <br />
        <button
          onClick={() => props.removeItemLocSt(key)}
          className="btn-regular"
        >
          {" "}
          remove
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ReviewProduct;
