import classes from './MealItem.module.css';
import Counter from '../../UI/Counter/Counter';

const MealItem = (props) =>{
    return(
        <div className={classes.item}>
            <div className={classes.imageBox}>
                <img src={props.img} ></img>
            </div>

            <div className={classes.contentsBox}>
                <h2 className={classes.name}>{props.name}</h2>
                <p className={classes.desc}> {props.desc} </p>
                <div className={classes.counter}>
                    <span className={classes.price}>{props.price}</span>
                    <Counter addItem={()=>props.addItem(props.id, props.price)} 
                            deleteItem = {()=>props.deleteItem(props.id, props.price)}
                            amount={props.cart[props.id]}/>
                </div>
            </div>
        </div>
    );
};


export default MealItem;