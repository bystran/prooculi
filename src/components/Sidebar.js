import React from 'react'
import { Link } from 'gatsby';
import Logo from './Logo';

import Links from '../constants/navlinks';
import CloseIcon from '../assets/icons/close_icon.svg';
import LinkButton from './LinkButton';
import '../saas/components/Sidebar.scss';



const Sidebar = ({ className, handleClick}) => {

    return (
        <nav 
            className={`side-bar ${className}`}  
        >   
            <div 
                className='close-button'
                onClick={handleClick}  
            >
                <CloseIcon />
            </div>
            <Link
                to="/"
                className="logo-side-bar"
            >
                <Logo />
            </Link>
            <Links
            />
            <LinkButton
                href="#kontakt"
                className="stan-sa-clenom"
            >
                <span>
                    Objednajte sa
                </span>
            </LinkButton>
        </nav>  
    )
}

export default Sidebar
