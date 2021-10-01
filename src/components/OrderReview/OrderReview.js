import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hock/useCart";
import useProduct from "../Hock/useProduct";
import ReviewProduct from "../ReviewProduct/ReviewProduct";

const OrderReview = () => {
  const [products, setProduct] = useProduct();

  const [cart, setCart] = useCart(products);

  const removeItemLocSt = (key) => {
    const deleteProduct = cart.filter((cartproduct) => cartproduct.key !== key);
    removeFromDb(key);
    setCart(deleteProduct);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
