import React from 'react'
import LinkButton from '../../LinkButton';
import MagnGlass from '../../../assets/icons/magnifying_glass.svg';
import Surgery from '../../../assets/icons/surgery.svg';
import Flower from '../../../assets/icons/flower.svg';

import '../../../saas/components/sections/HomeThree.scss';

const serviceTypes = [
    {
        id: 0,
        name: 'Vyšetrenia',
        icon: <MagnGlass />,
    },
    {
        id: 1,
        name: 'chirurgické výkony',
        icon: <Surgery />,
    },
    {
        id: 2,
        name: 'Estetická medicína',
        icon: <Flower />,
    },
]

const Home3 = () => {
    return (
        <div className='home-3' id='o-nas'>
            <h2>
                Očná Ambulancia Prooculli
            </h2>
            <h1>
                Kompletne vyšetrania vášho zraku 
            </h1>
            <p>
            Ponúka služby medicínskeho odboru oftalmológia, diagnostiku a liečbu akútnych,
            chronických ochorení oka, vyšetrenie očného pozadia, vyšetrenia zrakovej ostrosti,
            preventívne prehliadky, drobné chirurgické a estetické zákroky.
            Profesionálny a ľudský prístup, moderné prístrojové vybavenie v príjemnom prostredí novej
            očnej ambulancie.

            </p>
            <div className='service-types'>
                {
                    serviceTypes.map( sType => 
                        <div key={sType.id} className='service-type'>
                            {sType.icon}
                            <h3>{sType.name}</h3>
                        </div>    
                    )
                }
            </div>

            <LinkButton
                href='/'
            >
                Pozrite všetky služby
            </LinkButton>
            
        </div>
    )
}

export default Home3
