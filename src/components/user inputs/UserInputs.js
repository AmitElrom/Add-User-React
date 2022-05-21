import React, { useState } from 'react'

const UserInputs = ({ onAddUser }) => {

    const [newUser, setNewUser] = useState({ username: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewUser((prevVal) => {
            return { ...prevVal, [name]: value }
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        onAddUser(newUser)
    }

    return (
        <div style={{ textAlign: 'center' }} >
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