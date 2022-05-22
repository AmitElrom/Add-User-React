import React from 'react'
import User from '../user/User'

const Users = ({ users }) => {

    const usersList = users.map(user => {
        return <User key={user.id} userData={user} />
    })

    return (
        <div>
            {usersList}
        </div>
    )
}

export default Users