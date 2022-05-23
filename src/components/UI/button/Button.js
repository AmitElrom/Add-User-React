import React from 'react'
import elements from 'styled-components';

const StyledButton = elements.button`
font: inherit;
border: 1px solid #4f005f;
background: #4f005f;
color: white;
padding: 0.25rem 1rem;
cursor: pointer;
border-radius : 0.3rem;
  
&:hover,
&:active {
background: #741188;
border-color: #741188;
}

&:focus {
outline: none;
}
`

const Button = ({ value, type }) => {
    return (
        <StyledButton type={type || 'button'} >
            {value}
        </StyledButton>
    )
}

export default Button