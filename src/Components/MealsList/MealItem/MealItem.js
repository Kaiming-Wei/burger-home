import classes from './MealItem.module.css';
import Counter from '../../UI/Counter/Counter';

const MealItem = (props) =>{
    return(
        <div className={classes.item}>
            <div className={classes.imageBox}>
                <img className={classes.imageIcon} src={props.meal.img} ></img>
            </div>

            <div className={classes.contentsBox}>
                <h2 className={classes.name}>{props.meal.name}</h2>
                <p className={classes.desc}> {props.meal.desc} </p>
                <div className={classes.counter}>
                    <span className={classes.price}>{props.meal.price}</span>
                    <Counter meal={props.meal} />
                </div>
            </div>
        </div>
    );
};


export default MealItem;