import React from "react";
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css';


const root = document.getElementById('root');
const Backdrop = (props) => {
    return ReactDOM.createPortal(<div 
        className={`${classes.Backdrop} ${props.className}`}>{props.children}</div>, root);
}


export default Backdrop;