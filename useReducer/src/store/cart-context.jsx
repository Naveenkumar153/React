import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items: [],
    addItemToCart: (item) => {},
    updateCartItem: (id,amount) => {},
    totalItems: 0,
    totalPrice: 0,
});

function shoppingCartReducer(state, action) {

    console.log("action", action);
    console.log("state", state);

    if(action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
          updatedItems.push({
            id: action.payload.id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
        return {
          items: updatedItems,
        };
    }else if(action.type === "UPDATE_CART_ITEM"){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );
  
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        };
  
        updatedItem.quantity += action.payload.amount;
  
        if (updatedItem.quantity <= 0) {
          updatedItems.splice(updatedItemIndex, 1);
        } else {
          updatedItems[updatedItemIndex] = updatedItem;
        }
  
        return {
          items: updatedItems,
        };
    };
    return state;
};

export default function CartContextProvider({ children }) {

    const [ shoppingCartState, shoppingCartDispatcher ] = useReducer(shoppingCartReducer,{ items: [] });

      function handleAddItemToCart(id) {
        shoppingCartDispatcher({
            type: "ADD_ITEM",
            payload: { id: id },
        });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatcher({
            type: "UPDATE_CART_ITEM",
            payload: {  productId,  amount },
        });
      };
    
      const ctxValue = {
        items: shoppingCartState.items,
        totalItems: shoppingCartState.items.length,
        totalPrice: shoppingCartState.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        addItemToCart: handleAddItemToCart,
        updateCartItem: handleUpdateCartItemQuantity
      };

      return (
        <CartContext.Provider value={ctxValue}>
          {children}
        </CartContext.Provider>
      )
    
};

