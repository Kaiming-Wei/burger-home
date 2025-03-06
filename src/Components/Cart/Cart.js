import { useContext } from 'react';
import iconImg from '../../asset/bag.png';
import classes from './Cart.module.css';
import CartContext from '../../Store/CartContext';


const Cart = () => {
    const cart_ctx = useContext(CartContext);
    return(
        <div className={classes.Cart}>
            <div className={classes.Iconbox}>
                <img className={classes.BagIcon} src={iconImg}></img>
                {cart_ctx.totalItem > 0 ? <span className={classes.Amount}>{cart_ctx.totalItem}</span> : null}
            </div>
            <div className={classes.Detailbox}>
                {cart_ctx.totalItem > 0 ? 
                <p className={classes.Price}>{cart_ctx.totalPrice}</p> :
                <p className={classes.NoItem}>No Items</p>}
                <button className={classes.CheckoutBtn}>Checkout</button>
            </div>
            
        </div>
    )
}

export default Cart;