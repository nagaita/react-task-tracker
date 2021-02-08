import React from 'react'

type Props = {
    title: string
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>
                {title}
            </h1>
        </header>
    )
}

const headingStyle = {
    color: 'white',
    backgroundColor: 'black'
}

export default Header
