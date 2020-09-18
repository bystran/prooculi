import React from 'react'
import Logo from '../assets/icons/Logo.svg';
import NavLinks from '../constants/navlinks';
import '../saas/components/Footer.scss';

const Footer = () => {
    return (
        <footer className='page-footer'>   
            <Logo />
            <NavLinks />
            <div class='bottom-row'>
                © {new Date().getFullYear()} Prooculi s.r.o.
            </div>
        </footer>
    )
}

export default Footer
