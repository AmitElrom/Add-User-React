import React from 'react'
import User from '../user/User'

import Card from '../../UI/card/Card';

import classes from './Users.module.css';

const Users = ({ users, onDelete }) => {

    const handleDelete = (userId) => {
        onDelete(userId)
    }

    const usersList = users.map(user => {
        return <User key={user.id} userData={user} handleDelete={handleDelete} />
    })

    return (
        <Card className={classes.users} >
            <ul>
                {usersList}
            </ul>
        </Card>
    )
}

export default Users