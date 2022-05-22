import React from 'react'

const User = ({ userData: { id, username, age } }) => {

    const userText = `${username} (${age} years old)`

    return (
        <div>
            {userText}
        </div>
    )
}

export default User