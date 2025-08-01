import classes from './Checkout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import { useContext } from 'react';
import CartContext from '../../../Store/CartContext';

const Checkout = (props) => {
    const cart_ctx = useContext(CartContext);

    return(
        <div className={classes.CheckoutPage}>
            <div className={classes.Back} onClick={() => props.onHide()}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
            </div>

            <div className={classes.Details}>
                <header className={classes.Header}>
                    Details
                </header>

                <div className={classes.List}>
                    {cart_ctx.items.map(item => <CheckoutItem key={item.id} meal={item}/>)}
                </div>

                <footer className={classes.Footer}>
                    <div className={classes.TotalPrice}>
                        {cart_ctx.totalPrice}
                    </div>
                </footer>
            </div>

            <div className={classes.Cart}>
                <div className={classes.Amount}>{cart_ctx.totalPrice}</div>
                <button className={`${classes.CheckoutBtn} 
                ${cart_ctx.totalItem === 0 ? classes.DisableBtn : ''}`}>Pay</button>
            </div>
        </div>
    );
}


export default Checkout;