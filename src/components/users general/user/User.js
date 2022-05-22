import React from 'react'

const User = ({ userData: { username, age }, handleDelete }) => {

    const userText = `${username} (${age} years old)`

    return (
        <div onClick={handleDelete} >
            {userText}
        </div>
    )
}

export default User