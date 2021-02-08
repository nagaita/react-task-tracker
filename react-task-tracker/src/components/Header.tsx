import React from 'react'
import Button from './Button'

type Props = {
    title: string
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color='red' text='Add' />
        </header>
    )
}

export default Header
