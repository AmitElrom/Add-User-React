import React, { Fragment } from 'react'
import { createPortal } from 'react-dom';

import Card from '../card/Card';
import Button from '../button/Button';

import classes from './ErrorModal.module.css';
const { header, content, actions } = classes;

const Backdrop = ({ onOkay }) => {
    return <div className={classes.backdrop} onClick={onOkay} ></div>
}

const Modal = ({ title, message, onOkay }) => {
    return <Card className={classes.modal} >
        <header className={header} >
            <h2>{title}</h2>
        </header>
        <div className={content} >{message}</div>
        <footer className={actions} >
            <Button value='Okay' onOkay={onOkay} />
        </footer>
    </Card>
}

const ErrorModal = ({ title, message, onOkay }) => {

    return (
        <Fragment>
            {createPortal(<Backdrop onClick={onOkay} />, document.getElementById('back-drop'))},
            {createPortal(<Modal title={title} message={message} onOkay={onOkay} />, document.getElementById('error-modal'))}
        </Fragment>
    )
}

export default ErrorModal