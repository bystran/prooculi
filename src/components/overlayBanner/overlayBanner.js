import React from 'react'
import Banner from './banner';
import Overlay from './overlay';
import "./overlayBanner.scss";


const OverlayBanner = (props) => {
    const expiry = Date.parse('25 Jan 2021 00:00:00 GMT'); 
    const {background} = props;
    const [closed, setClosed] = React.useState(false);
    const closeWindow = () => {
        setClosed(true);
    }
    const handleEscClick = (e) => {
        if(e.key === "Escape"){
            closeWindow()
        }
    }
    const handleOnClick = (e) => {
        closeWindow();
    }


    return (
        Date.now() < expiry ?
        <Overlay 
            style={{visibility: closed ? "hidden": "visible"}} 
            className="overlay-banner"
            onClick={handleOnClick}
        >
            <Banner 
                closeAction={handleOnClick}
                background={background}
                primaryText={<h2>OTVÁRAME</h2>}
                secondaryText={<h1 className="white">V JANUÁRI</h1>}
                primaryAction={<a className="link-btn" href="#kontakt" onClick={handleOnClick}>Chcem sa objednať</a>}
                secondaryAction={<div onClick={handleOnClick}>Pokračovať na stránku</div>}
            />
        </Overlay> : <></>
    )
}

export default OverlayBanner
