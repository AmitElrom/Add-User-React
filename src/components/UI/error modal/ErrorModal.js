import React from 'react'

import Card from '../card/Card';
import Button from '../button/Button';

import classes from './ErrorModal.module.css';
const { header, content, actions } = classes;

const ErrorModal = ({ title, message }) => {

    return (
        <div className={classes.backdrop} >
            <Card className={classes.modal} >
                <header className={header} >{title}</header>
                <div className={content} >
                    <h2>{message}</h2>
                </div>
                <footer className={actions} >
                    <Button value='Okay' />
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal