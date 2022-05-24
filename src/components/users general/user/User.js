import React from 'react'

import classes from './User.module.css';

const User = ({ userData: { id, username, age }, handleDelete }) => {

    const userText = `${username} (${age} years old) - ${id}`

    return (
        <li className={classes.li} onClick={() => handleDelete(id)} >
            {userText}
        </li>
    )
}

export default User