import React from 'react'

type Props = {
    title: string
}

const Header: React.FC<Props> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header
