import classes from './Counter.module.css';

const Counter = (props) =>{
    return(
        <div className={classes.counter}>

            {
                (props.amount && props.amount > 0) ? (
                    <>
                        <button className={classes.sub}>-</button>
                        <span className={classes.count}>{props.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.add}>+</button>
        </div>
    );
}

export default Counter;