import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop=(props)=>{
    return(
        <div className={classes.backdrop}></div>
    )
}
const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

const Modal=(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop/>, document.getElementById("overlays"))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overlays"))}

        </Fragment>
    )
}
export default Modal;