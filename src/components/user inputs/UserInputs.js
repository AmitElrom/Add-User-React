import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import { titleCase } from '../../utils/manipulateData';

import Card from '../UI/card/Card';
import Button from '../UI/button/Button';

import classes from './UserInputs.module.css';

const UserInputs = ({ onAddUser, onError }) => {

    const [newUser, setNewUser] = useState({ id: '', username: '', age: '' });
    const { username, age } = newUser;

    const changeUserHandler = (e) => {
        const { name, value } = e.target;

        if (name === 'username') {
            let newValue = titleCase(value)
            setNewUser((prevVal) => {
                return { ...prevVal, username: newValue }
            })
        } else {
            setNewUser((prevVal) => {
                return { ...prevVal, [name]: value }
            })
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        else if (+age < 1) {
            return;
        }
        setNewUser({ ...newUser, username: '', age: '' })
        onAddUser({ ...newUser, id: nanoid() })
    }

    return (
        <Card className={classes.input} >
            <form onSubmit={handleSubmit} >
                <label htmlFor='username' >Username</label> <br />
                <input value={username} name='username' id='username' type='text' onChange={changeUserHandler} />
                <label htmlFor='age' >Age (Years)</label> <br />
                <input value={age} name='age' id='age' type='number' onChange={changeUserHandler} />
                <Button value='Add User' type='submit' />
            </form>
        </Card>
    )
}

export default UserInputs