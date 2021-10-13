import { SDK_VERSION } from "@firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useHistory } from "react-router";
import useAuth from "../../Context/useAuth";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hock/useCart";
import useProduct from "../Hock/useProduct";
import ReviewProduct from "../ReviewProduct/ReviewProduct";

const OrderReview = () => {
  const [products, setProduct] = useProduct();
  const [cart, setCart] = useCart(products);
  const { user } = useAuth();
  const history = useHistory();

  const removeItemLocSt = (key) => {
    const deleteProduct = cart.filter((cartproduct) => cartproduct.key !== key);
    removeFromDb(key);
    setCart(deleteProduct);
  };

  const placeOrder = () => {
    // something problem
    // if (user.email) {
    // clearTheCart();
    // setCart([]);
    // }
    history.push("/successfull");
  };

  return (
    <div className="shop-container">
      <div>
        {cart.map((productreview) => (
          <ReviewProduct
            key={productreview.key}
            productreview={productreview}
            removeItemLocSt={removeItemLocSt}
          ></ReviewProduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button className="btn-regular" onClick={placeOrder}>
            Place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
