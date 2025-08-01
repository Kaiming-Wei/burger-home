import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalItem: 0,
    totalPrice: 0.0,
    addItem : ()=>{},
    deleteItem : ()=>{},
    emptyCart : ()=>{}
});

export default CartContext;

