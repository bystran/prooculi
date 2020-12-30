import React from 'react';

const Overlay = (props) => {
    const {className, children, onClick, style} = props;
    return (
        <div 
            style={{...style}}
            className={`${className} overlay`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Overlay
