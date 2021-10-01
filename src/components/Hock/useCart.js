import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products?.length) {
      const saveValue = getStoredCart();
      let allDatasend = [];
      for (const key in saveValue) {
        const allFilterProduct = products.find(
          (product) => product.key === key
        );
        const quntity = saveValue[key];
        allFilterProduct.quntity = quntity;
        allDatasend.push(allFilterProduct);
      }
      setCart(allDatasend);
    }
  }, [products]);

  return [cart, setCart];
};
export default useCart;
