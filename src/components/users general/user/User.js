import React from 'react'

const User = ({ userData: { id, username, age }, handleDelete }) => {

    const userText = `${username} (${age} years old)`

    return (
        <div onClick={() => handleDelete(id)} >
            {userText}
        </div>
    )
}

export default User