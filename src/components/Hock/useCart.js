import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products) {
      const saveValue = getStoredCart();
      let allDatasend = [];
      for (const key in saveValue) {
        const allFilterProduct = products.find(
          (product) => product.key === key
        );
        const quantity = saveValue[key];
        allFilterProduct.quantity = quantity;
        allDatasend.push(allFilterProduct);
      }
      setCart(allDatasend);
    }
  }, [products]);

  return [cart, setCart];
};
export default useCart;
