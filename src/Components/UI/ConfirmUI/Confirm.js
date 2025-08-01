import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css'

const Confirm = (props) => {

    return(
        <Backdrop onClick={(e) => props.CancelDelete(e)}>
            <div className={classes.OuterBox} >
                <div className={classes.Text}>{props.Text}</div>
                <div>
                    <button className={classes.ConfirmBtn}
                    onClick={(e) => props.ConfirmDelete(e)}>Confirm</button>

                    <button className={classes.CancelBtn}
                        onClick={(e) => props.CancelDelete(e)}>Cancel</button>
                </div>
            </div>
        </Backdrop>
    );
}


export default Confirm;