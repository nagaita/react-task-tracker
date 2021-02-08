import React from 'react'
import Button from './Button'

type Props = {
    title: string
}

const Header: React.FC<Props> = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button text='Add' onClick={onClick} />
        </header>
    )
}

export default Header
