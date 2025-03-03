import { createContext } from "react";

const CartContext = createContext({
    totalItem: 0,
    totalPrice: 0.0,
    addItem : ()=>{},
    deleteItem : ()=>{}
});

export default CartContext;












// const addItem = (id, price) => {
//     setCart(prevCart => {
//         let cartMap = {...prevCart};
//         cartMap[id] = (cartMap[id] || 0) + 1;
//         cartMap['totalItem'] = (cartMap['totalItem'] || 0) + 1;
//         cartMap['totalPrice'] = (cartMap['totalPrice'] || 0) + price;
//         return cartMap;
//     });

// }
// const deleteItem = (id, price) => {
//   setCart(prevCart => {
//       let cartMap = {...prevCart};
//       if(cartMap[id]){
//         cartMap[id] = cartMap[id] - 1;
//         if(cartMap[id] === 0){
//           delete cartMap[id];
//         }
//       }
//       cartMap['totalItam'] = (cartMap['totalItam']) - 1;
//       if(cartMap['totalItam'] < 0) cartMap['totalItam'] = 0;

//       cartMap['totalPrice'] = (cartMap['totalPrice']) - price;
//       if(cartMap['totalPrice'] < 0) cartMap['totalPrice'] = 0; 
//       return cartMap;
//   });

// }