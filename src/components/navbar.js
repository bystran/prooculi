import React from 'react';
import { Link } from 'gatsby';
import Links from '../constants/navlinks'; 
import LinkButton from './LinkButton';
import '../saas/components/Navbar.scss';

const navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <Links />
            </div>
            <div>
                <LinkButton
                    className='book-btn'
                >
                    Objednajte sa
                </LinkButton>

            </div>
        </>

    )
}



export default navbar;
