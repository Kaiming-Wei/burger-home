import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classes from './Counter.module.css';
import CartContext from '../../../Store/CartContext';

const Counter = (props) =>{
    const cartCtx = useContext(CartContext);
    const addHandler = () =>{
        cartCtx.addItem(props.meal.id, props.meal.price);
    }

    const deleteHandler = () =>{
        cartCtx.deleteItem(props.meal.id, props.meal.price);
    }

    return(
        <div className={classes.counter}>

            {
                (cartCtx[props.meal.id] && cartCtx[props.meal.id] > 0) ? (
                    <>
                        <button onClick={deleteHandler} className={classes.sub}>
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.count}>{cartCtx[props.meal.id]}</span>
                    </>
                ) : null
            }
            <button onClick={addHandler} className={classes.add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default Counter;