import _ from "lodash";
import productsData from "../Data/Data";

const productsHandler = (state, action) => {
  switch (action.type) {
    case "SORT_PRICE": {
      const value = action.selectOption.value;
      const products = productsData;

      if (value === "lowest") {
        return {
          ...state,
          data: _.orderBy(products, ["price"], ["asc"]),
        };
      } else {
        return {
          ...state,
          data: _.orderBy(products, ["price"], ["desc"]),
        };
      }
    }
    case "SORT_NAME": {
      const value = action.selectOption.value;
      if (value === "all") {
        return { ...state, data: productsData };
      } else {
        const updateProduct = productsData.filter(
          (c) => c.category.indexOf(value) >= 0
        );
        return { ...state, data: updateProduct };
      }
    }
    case "ADD_ITEM": {
      const addItem = [...state.cartItems];
      const addItemIndex = addItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (addItemIndex >= 0) {
        const updatedaddItem = { ...addItem[addItemIndex] };
        updatedaddItem.quantity++;
        addItem[addItemIndex] = updatedaddItem;
      } else {
        let tempProduct = { ...action.payload, quantity: 1 };
        addItem.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(addItem));
      return { ...state, cartItems: addItem };
    }
    case "REMOVE_ITEM": {
      const addItem = [...state.cartItems];
      const itemIndex = addItem.findIndex((i) => i.id === action.payload.id);
      const updateCart = { ...addItem[itemIndex] };

      if (updateCart.quantity === 1) {
        const filterItem = addItem.filter((i) => i.id !== action.payload.id);
        localStorage.setItem("cartItems", JSON.stringify(filterItem));
        return {
          ...state,
          cartItems: filterItem,
        };
      } else {
        updateCart.quantity--;
        addItem[itemIndex] = updateCart;
        localStorage.setItem("cartItems", JSON.stringify(addItem));
        return {
          ...state,
          cartItems: addItem,
        };
      }
    }
    case "DELETE_ITEM": {
      const item = [...state.cartItems];
      const filterItem = item.filter((i) => i.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(filterItem));
      return {
        ...state,
        cartItems: filterItem,
      };
    }
    case "SEARCH_ITEM": {
      const value = action.event.target.value;

      if (value === "") {
        return { ...state, data: productsData };
      } else {
        const filterItems = productsData.filter((i) =>
          i.title.toLowerCase().includes(value.toLowerCase())
        );
        return { ...state, data: filterItems };
      }
    }

    default:
      return state;
  }
};

export default productsHandler;
