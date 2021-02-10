import React from 'react'
import Button from './Button'

type Props = {
    title: string
    onAdd: () => void
}

const Header: React.FC<Props> = ({ title, onAdd }) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button text='Add' onClick={onAdd} />
        </header>
    )
}

export default Header
