import React from 'react'

import Card from '../card/Card';
import Button from '../button/Button';

import classes from './ErrorModal.module.css';
const { header, content, actions } = classes;

const ErrorModal = ({ title, message, onOkay }) => {

    return (
        <div className={classes.backdrop} onClick={onOkay} >
            <Card className={classes.modal} >
                <header className={header} >
                    <h2>{title}</h2>
                </header>
                <div className={content} >{message}</div>
                <footer className={actions} >
                    <Button value='Okay' onOkay={onOkay} />
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal