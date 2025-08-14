import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classes from './Counter.module.css';
import CartContext from '../../../Store/CartContext';

const Counter = (props) =>{
    const cartCtx = useContext(CartContext);

    const addHandler = () =>{
        cartCtx.cartDispatch({type: 'ADD_ITEM', meal: props.meal});
    }

    const deleteHandler = () =>{
        cartCtx.cartDispatch({type: 'DELETE_ITEM', meal: props.meal});
    }

    return(
        <div className={classes.counter}>
            {
                (props.meal.amount > 0) ? (
                    <>
                        <button onClick={deleteHandler} className={classes.sub}>
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.count}>{props.meal.amount}</span>
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