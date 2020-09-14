import React from 'react';
import { Link } from 'gatsby';
import ArrowIcon from '../assets/icons/arrow-icon.svg'

const LinkButton = (props) => {
  const {
    background, color, href, children, className, icon
  } = props;

  const style = {
    background,
    color,
  };

  return (
    <Link href={href}>
      <span
        style={style}
        className={`link-btn ${className}`}
      >
        <span className='btn-text'>
         {children}
        </span>
        <span className='btn-icon'>
          {
            icon ? icon : <ArrowIcon />
          }
        </span>

      </span>
    </Link>
  );
};

export default LinkButton;
