import classes from './MealItem.module.css';
import Counter from '../../UI/Counter/Counter';

const MealItem = () =>{
    return(
        <div className={classes.item}>
            <div className={classes.imageBox}>
                <img src="/img/meals/1.png" ></img>
            </div>

            <div className={classes.contentsBox}>
                <h2 className={classes.name}>Cheeseburger</h2>
                <p className={classes.desc}>A cheeseburger is a classic sandwich consisting 
                    of a grilled or pan-seared beef patty served in 
                    a sliced bun, topped with a slice of melted cheese. 
                    </p>
                <div className={classes.counter}>
                    <span className={classes.price}>2.5</span>
                    <Counter amount={2}/>
                </div>
            </div>
        </div>
    );
};


export default MealItem;