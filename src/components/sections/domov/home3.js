import React from 'react'
import LinkButton from '../../LinkButton';
import MagnGlass from '../../../assets/icons/magnifying_glass.svg';
import Glasses from '../../../assets/icons/glasses.svg';
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
        name: 'Starostlivosť',
        icon: <Glasses />,
    },
    {
        id: 2,
        name: 'Estetická medicína',
        icon: <Flower />,
    },
]

const Home3 = () => {
    return (
        <div className='home-3'>
            <h2>
                Očná Ambulancia Prooculli
            </h2>
            <h1>
                Kompletne vyšetrania vášho zraku 
            </h1>
            <p>
                Zistíme príčinu vášho zrakového problému a poskytneme
                vám vhodné riešenie. Využívame najmodrenejšie
                prístroje a postupy na detekciu chyb, ktoré vám 
                potom aj v spolupráci s naším partnerom pomôžeme
                vyriešiť. Oftalmologická starostlivosť poskytujeme
                pre dospelých a deti od 7 rokov.

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
