import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import { titleCase } from '../../utils/manipulateData';

const UserInputs = ({ onAddUser }) => {

    const [newUser, setNewUser] = useState({ id: '', username: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            let newValue = titleCase(value)
            setNewUser((prevVal) => {
                return { ...prevVal, username: newValue, id: nanoid() }
            })
        } else {
            setNewUser((prevVal) => {
                return { ...prevVal, [name]: value, id: nanoid() }
            })
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        onAddUser(newUser)
    }

    return (
        <div >
            <form onSubmit={handleSubmit} >
                <div >
                    <label htmlFor='username' >Username</label> <br />
                    <input name='username' id='username' type='text' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='age' >Age (Years)</label> <br />
                    <input name='age' id='age' type='number' onChange={handleChange} />
                </div>
                <input type='submit' value='Add User' />
            </form>
        </div>
    )
}

export default UserInputs