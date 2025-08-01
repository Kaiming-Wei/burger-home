import Counter from '../../../UI/Counter/Counter';
import classes from './CheckoutItem.module.css';

const CheckoutItem = (props) =>{
    let totalPrice = props.meal.price * props.meal.amount;
    return(
        <div className={classes.CheckoutItem}>
            <div className={classes.Image}>
                <img src={props.meal.img}></img>
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Name}>{props.meal.name}</h2>
                <div className={classes.Amount}>
                    <div><Counter meal={props.meal}/></div>
                    <div className={classes.Price}>{totalPrice}</div>
                </div>
                
            </div>
        </div>
    );
}

export default CheckoutItem;