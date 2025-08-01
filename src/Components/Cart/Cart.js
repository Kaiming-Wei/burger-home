import { useContext, useState } from 'react';
import iconImg from '../../asset/bag.png';
import classes from './Cart.module.css';
import CartContext from '../../Store/CartContext';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';


const Cart = () => {
    const cart_ctx = useContext(CartContext);
    const [showCart, setshowCart] = useState(false);
    const [showCheckout, setshowCheckout] = useState(false);

    const toggleCartDetails = () =>{
        if(cart_ctx.totalItem === 0){
            setshowCart(false);
            return;
        }
        setshowCart(preState => !preState);
    }

    const onShowCheckout = () =>{
        if(cart_ctx.totalItem === 0) return;
        setshowCheckout(true);
    }

    const onHideCheckout = () =>{
        setshowCheckout(false);
    }

    return(
        <div onClick={toggleCartDetails} className={classes.Cart}>
            {showCart && <CartDetails showDetail={toggleCartDetails}/>}
            {showCheckout && <Checkout onHide={onHideCheckout}/>}

            <div className={classes.Iconbox}>
                <img className={classes.BagIcon} src={iconImg}></img>
                {cart_ctx.totalItem > 0 ? <span className={classes.Amount}>{cart_ctx.totalItem}</span> : null}
            </div>
            <div className={classes.Detailbox}>
                {cart_ctx.totalItem > 0 ? 
                <p className={classes.Price}>{cart_ctx.totalPrice}</p> :
                <p className={classes.NoItem}>No Items</p>}
                <button 
                    onClick={onShowCheckout}
                    className={`${classes.CheckoutBtn} 
                    ${cart_ctx.totalItem > 0 ? '' : classes.DisableBtn}`}>Checkout</button>
            </div>
            
        </div>
    )
}

export default Cart;