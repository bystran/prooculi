import React from 'react';
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
                    href="/"
                >
                    Objednajte sa
                </LinkButton>

            </div>
        </>

    )
}



export default navbar;
