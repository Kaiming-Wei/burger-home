import MealsList from './Components/MealsList/MealsList';
import {useState} from 'react';
import CartContext from './Store/CartContext';

const MEALS_DATA = [
  {
    id : 1,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/1.png'
  },
  {
    id : 2,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/2.png'
  },
  {
    id : 3,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/3.png'
  },
  {
    id : 4,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/4.png'
  },
  {
    id : 5,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/5.png'
  },
  {
    id : 6,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/6.png'
  },
  {
    id : 7,
    name : 'Cheeseburger',
    desc : "A cheeseburger is a classic sandwich consisting of a grilled or pan-seared beef patty served ina sliced bun, topped with a slice of melted cheese.",
    price : 2.5,
    img : '/img/meals/7.png'
  }
];

function App() {
  const [meals, setMeals] = useState(MEALS_DATA);
  const [cart, setCart] = useState({});

  const addItem = (id, price) => {
      setCart(prevCart => {
          let cartMap = {...prevCart};
          cartMap[id] = (cartMap[id] || 0) + 1;
          cartMap['totalItem'] = (cartMap['totalItem'] || 0) + 1;
          cartMap['totalPrice'] = (cartMap['totalPrice'] || 0) + price;
          return cartMap;
      });

  }
  const deleteItem = (id, price) => {
    setCart(prevCart => {
        let cartMap = {...prevCart};
        if(cartMap[id]){
          cartMap[id] = cartMap[id] - 1;
          if(cartMap[id] === 0){
            delete cartMap[id];
          }
        }
        cartMap['totalItam'] = (cartMap['totalItam']) - 1;
        if(cartMap['totalItam'] < 0) cartMap['totalItam'] = 0;

        cartMap['totalPrice'] = (cartMap['totalPrice']) - price;
        if(cartMap['totalPrice'] < 0) cartMap['totalPrice'] = 0; 
        return cartMap;
    });

  }
  return (
    <CartContext.Provider value={{...cart, addItem, deleteItem}}>
      <MealsList meals={meals}/>
    </CartContext.Provider>
  );
}

export default App;
