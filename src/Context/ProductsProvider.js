import { useContext, useReducer, createContext } from "react";
import productsData from "../Data/Data";
import productsHandler from "./ProductsReducer";

export const productsAction = createContext();
export const productsActionDispatch = createContext();

const initialState = {
  data: productsData,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  total: 0,
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsHandler, initialState);

  return (
    <productsAction.Provider value={products}>
      <productsActionDispatch.Provider value={dispatch}>
        {children}
      </productsActionDispatch.Provider>
    </productsAction.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(productsAction);
export const useProductsdispatch = () => useContext(productsActionDispatch);
