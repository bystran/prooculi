import React from 'react'
import { Link } from 'gatsby'

const links = [
    { 
        id: 1,
        text: 'O nás',
        href: '/#o-nas',
    },
    {
        id: 2,
        text: 'Služby',
        href: '/služby',
    },
    {
        id: 3,
        text: 'Cenník',
        href: '/cennik',
    },
    {
        id: 4,
        text: 'Kontakt',
        href: '/#kontakt',
    },
    {
        id: 5,
        text: 'Ordinačné hodiny',
        href: '/#ordinacne-hodiny',
    }
]


const navlinks = ({className}) => {
    return (
        <ul 
            className={`nav-links ${className ? className : ''}`}
        >
            { links.map( link => 
                <li key={link.id}>
                    <Link
                        to={link.href}
                        activeClassName="active-link"
                    >
                        {link.text}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default navlinks
