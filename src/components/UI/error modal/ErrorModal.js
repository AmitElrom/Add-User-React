import React from 'react'

const ErrorModal = ({ error, onAcceptError }) => {

    let msg;
    if (error === 'no-age') {
        msg = 'Please enter a valid age (non-empty-values)'
    }
    else if (error === 'no-username') {
        msg = ('Please enter a valid name (non-empty-values)')
    }
    else {
        msg = ('Please enter a valid name and age (non-empty-values)')
    }

    const handleAcceptError = () => onAcceptError()

    return (
        <div>
            <div>Invalid Input</div>
            <div>
                <div>{msg}</div>
                <div>
                    <input type='button' value='Okay' onClick={handleAcceptError} />
                </div>
            </div>
        </div>
    )
}

export default ErrorModal