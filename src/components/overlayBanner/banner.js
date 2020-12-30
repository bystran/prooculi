import BackgroundImage from 'gatsby-background-image';
import React from 'react'
import Close from '../../assets/icons/close_icon.svg';


const Banner = (props) => {
    
    const {closeAction, background, primaryText, secondaryText, primaryAction, secondaryAction} = props; 
    const style = {
        // Defaults are overwrite-able by setting one or each of the following:
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
    }

    return (
        <BackgroundImage className="banner2" fluid={background} style={style}> 
            <div 
                className="close-btn"
                onClick={closeAction}
            >
                <Close 
                />
            </div>

            <div className="text">
                {primaryText}
                {secondaryText}
            </div>
            <div className="actions">
                {primaryAction}
                {secondaryAction}
            </div>
        </BackgroundImage>
    )
}

export default Banner 
 