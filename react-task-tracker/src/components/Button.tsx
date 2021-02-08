import React from 'react'

type Props = {
    color?: string,
    text: string
}

const Button: React.FC<Props> = ({ color = 'steelblue', text }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn'>
            {text}
        </button>
    )
}

export default Button
