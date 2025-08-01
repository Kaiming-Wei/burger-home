import MealsList from './Components/MealsList/MealsList';
import {useState} from 'react';
import CartContext from './Store/CartContext';
import Search from './Components/Search/Search';
import Cart from './Components/Cart/Cart';

const MEALS_DATA = [
  {
    id : 1,
    name : 'Cheeseburger',
    desc : "A timeless favorite featuring a juicy beef patty, melted cheddar cheese, fresh lettuce, ripe tomatoes, pickles, onions, and a dollop of tangy ketchup and mustard, all nestled in a soft sesame seed bun.",
    price : 2.5,
    img : '/img/meals/1.png'
  },
  {
    id : 2,
    name : 'BBQ Bacon Burger',
    desc : "A smoky and savory delight with a grilled beef patty, crispy bacon strips, melted pepper jack cheese, caramelized onions, and a generous drizzle of BBQ sauce, served on a toasted brioche bun.",
    price : 4.5,
    img : '/img/meals/2.png'
  },
  {
    id : 3,
    name : 'Truffle Butter Burger',
    desc : "A gourmet burger experience with a juicy beef patty, truffle-infused butter, melted brie cheese, arugula, and a balsamic glaze, all on an artisanal sourdough bun.",
    price : 5.5,
    img : '/img/meals/3.png'
  },
  {
    id : 4,
    name : 'Crispy Chicken Ranch Burger',
    desc : "A crispy fried chicken breast topped with cool ranch dressing, fresh lettuce, tomato, red onion, and a slice of melted cheddar cheese, all served on a soft potato bun.",
    price : 5.5,
    img : '/img/meals/4.png'
  },
  {
    id : 5,
    name : 'Hawaiian Teriyaki Burger',
    desc : "A sweet and savory fusion featuring a grilled chicken or beef patty, grilled pineapple, teriyaki glaze, melted provolone cheese, and crispy lettuce, served on a toasted Hawaiian sweet roll.",
    price : 3.5,
    img : '/img/meals/5.png'
  },
  {
    id : 6,
    name : 'Classic Fish Burger',
    desc : "A tender, beer-battered cod fillet topped with tangy tartar sauce, crunchy coleslaw, and a slice of dill pickle, served on a toasted brioche bun. A seafood lover's dream!",
    price : 2.5,
    img : '/img/meals/6.png'
  },
  {
    id : 7,
    name : 'Mushroom Swiss Burger',
    desc : "A rich and earthy burger topped with sautéed mushrooms, melted Swiss cheese, and a creamy garlic aioli, all on a toasted pretzel bun. Perfect for mushroom lovers!",
    price : 3.5,
    img : '/img/meals/7.png'
  }
];

function App() {
  const [meals, setMeals] = useState(MEALS_DATA);
  const [cart, setCart] = useState({
    items : [],
    totalItem: 0,
    totalPrice: 0.0
  });

  const addItem = (meal) => {
      setCart(prevCart => {
          const cartMap = {...prevCart};
          if(cartMap.items.indexOf(meal) === -1){
            cartMap.items.push(meal)
            meal.amount = 1;
          }else{
            meal.amount += 1;
          }
          cartMap['totalItem'] = (cartMap['totalItem'] || 0) + 1;
          cartMap['totalPrice'] = (cartMap['totalPrice'] || 0) + meal.price;
          return cartMap;
      });


  }
  const deleteItem = (meal) => {
    setCart(prevCart => {
        let cartMap = {...prevCart};
        meal.amount -= 1;
        if(meal.amount === 0){
          cartMap.items.splice(cartMap.items.indexOf(meal), 1);
        }
        cartMap['totalItem'] = (cartMap['totalItem']) - 1;
        if(cartMap['totalItem'] < 0) cartMap['totalItem'] = 0;

        cartMap['totalPrice'] = (cartMap['totalPrice']) - meal.price;
        if(cartMap['totalPrice'] < 0) cartMap['totalPrice'] = 0; 
        return cartMap;
    });

  }
  const searchItem = (event) => {
    let keyword = event.target.value.toLowerCase();
    if(keyword === ""){
      setMeals(MEALS_DATA);
      return;
    }
    let filterMeal = MEALS_DATA.filter(item => {
      return(
        item.name.toLowerCase().includes(keyword) ||
        // item.desc.toLowerCase().includes(keyword) ||
        item.price.toString().includes(keyword)
      )
    });

    setMeals(filterMeal);
  }

  const emptyCart = () => {
    setCart( (prevs) => {
      let cartMap = {...prevs};
      cartMap.items.forEach(item => item.amount = 0)
      cartMap.items = [];
      cartMap.totalItem = 0;
      cartMap.totalPrice = 0.0;
      return(cartMap);
    });
    
  }

  return (
    <div>
          <Search searchItem={searchItem}/>
          <CartContext.Provider value={{...cart, addItem, deleteItem, emptyCart}}>
            <MealsList meals={meals}/>
            <Cart/>
          </CartContext.Provider>
    </div>

  );
}

export default App;
