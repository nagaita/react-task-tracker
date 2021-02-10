import React from 'react'

type Props = {
    color?: string
    text: string
    onClick: () => void
}

const Button: React.FC<Props> = ({ color = 'steelblue', text, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} className='btn' onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
