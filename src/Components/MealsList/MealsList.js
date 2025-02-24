import MealItem from './MealItem/MealItem';
import classes from './MealsList.module.css';

const MealsList = (props) =>{
    return(
        <div className={classes.MealsList}>
            {props.meals.map(item => <MealItem key={item.id} 
                                                {...item} 
                                                cart = {props.cart}
                                                addItem={props.addItem}
                                                deleteItem={props.deleteItem}
                                                />)}
        </div>
    );
};


export default MealsList;