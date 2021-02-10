import React from 'react'
import Button from './Button'

type Props = {
    title: string
    onAdd: () => void,
    showsTaskForm: boolean
}

const Header: React.FC<Props> = ({ title, onAdd, showsTaskForm }) => {
    let button
    if (showsTaskForm) {
        button = <Button text='Close' color='red' onClick={onAdd} />
    } else {
        button = <Button text='Add' color='green' onClick={onAdd} />
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            {button}
        </header>
    )
}

export default Header
