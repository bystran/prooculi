import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import NavBar from './navbar';
import {throttle} from 'lodash'
import Logo from './Logo';

import MenuIcon from '../assets/icons/menu_icon.svg';

import '../saas/components/Header.scss';



const Header = ({ siteTitle }, ) => {
    const [ hidden, setHidden ] = useState(true)
    const [classes, setClasses] = useState("at-top")
    const handleClick = (e) => {
        if(e.target.nodeName !== 'NAV'){
            setHidden(!hidden)
        }
    }


    const handleScroll = () => {
        console.log('scrolling')
        const currentPos = window.pageYOffset
        let classString = ''

        if(currentPos<10){
            classString = 'at-top'
            setClasses(classString)
        }else if(classes !== ''){
          setClasses(classString)
        }


    }
    const trhottledHandleScroll = throttle(handleScroll, 100);


      useEffect(()=>{
          window.addEventListener('scroll', trhottledHandleScroll);
          return () => {
              window.removeEventListener('scroll', trhottledHandleScroll);
          }
      },[])
    return(
      <header className={`page-header ${classes}`}>
        
        <div>
          <Link
              to="/"
              className="logo"
          >
              <Logo />
            </Link>
        </div>
        <div className='mobile-menu-icon'
          onClick={handleClick}
        >
          <MenuIcon />
        </div>
        <NavBar />
        
        <Sidebar 
          className={`${hidden ? 'hidden': ''}`}
          handleClick={handleClick}
        /> 
        <div className='header-gradient-border'>

        </div>


      </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
