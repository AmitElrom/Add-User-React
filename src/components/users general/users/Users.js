import React from 'react'
import User from '../user/User'

const Users = ({ users, onDelete }) => {

    const handleDelete = (userId) => {
        onDelete(userId)
    }

    const usersList = users.map(user => {
        return <User key={user.id} userData={user} handleDelete={handleDelete} />
    })

    return (
        <div>
            {usersList}
        </div>
    )
}

export default Users