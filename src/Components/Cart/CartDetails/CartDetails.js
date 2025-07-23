import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CartDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import CartContext from '../../../Store/CartContext';
import { useContext } from 'react';
import MealItem from '../../MealsList/MealItem/MealItem';

const CartDetails = () => {
    const Cartctx = useContext(CartContext);
    return(
        <Backdrop>
            <div className={classes.CartDetails}>
                <header className={classes.header}>
                    <h2>Cart Details</h2>
                    <div className={classes.Empty}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>Empty</span>
                    </div>
                </header>

                
                <div className={classes.MealList}>
                    {Cartctx.items.map(item => {
                        return <MealItem key={item.id} meal={item} noDesc/>
                    })}
                </div>
            </div>
            
        </Backdrop>
    )
}

export default CartDetails;