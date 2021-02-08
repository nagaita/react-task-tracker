import React from 'react'

type Props = {
    title: string
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

export default Header
