import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CartDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import CartContext from '../../../Store/CartContext';
import { useState, useContext } from 'react';
import MealItem from '../../MealsList/MealItem/MealItem';
import Confirm from '../../UI/ConfirmUI/Confirm';

const CartDetails = (props) => {
    const Cartctx = useContext(CartContext);
    const [ShowConfirm, setShowConfirm] = useState(false);

    const EmptyHandler = () => {
        setShowConfirm(true);
    }

    const ConfirmDelete = () =>{
        Cartctx.cartDispatch({type: 'CLEAR'});
    }

    const CancelDelete = (event) =>{
        event.stopPropagation();
        setShowConfirm(false);
    }



    return(
        <Backdrop>
            {ShowConfirm && 
            <Confirm 
                Text={'Are you sure to empty the cart?'}
                ConfirmDelete = {ConfirmDelete}
                CancelDelete = {CancelDelete}
            />}
            <div 
                onClick={(event) => event.stopPropagation()}
                className={classes.CartDetails}>
                <header className={classes.header}>
                    <h2>Cart Details</h2>
                    <div 
                        onClick={EmptyHandler}
                        className={classes.Empty}>
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