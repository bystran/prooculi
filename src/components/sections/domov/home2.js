import React from 'react'
import { useStaticQuery, graphql, Link} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import LinkButton from '../../LinkButton';
import '../../../saas/components/sections/HomeTwo.scss';

//icons
import AccessTime from '../../../assets/icons/access-time.svg';
import Euro from '../../../assets/icons/euro.svg';
import Map from '../../../assets/icons/map.svg';
import Eye from '../../../assets/icons/eye.svg';

const query = graphql`
  {
    file(relativePath: {eq: "glasses.jpg"}) {
      img:childImageSharp  {
        fluid (maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Home2 = () => {
    const {file:{img:{fluid}}} = useStaticQuery(query);

    const combined_bg = [
        `linear-gradient(125deg, rgba(0, 180, 216, 0.90) 0%, rgba(0, 180, 216, 0.90) 100%)`,    
        fluid
    ]
    const style={
        // Defaults are overwrite-able by setting one or each of the following:
        backgroundSize: 'cover, auto 100%',
        backgroundPosition: 'center, right center',
      }

    return (
        <div className='home-2'>
          <div className='home-2-content'>
            <Link to='/sluzby'>
              <div className='home-2-nav-small home-box'>
                <h3>Služby</h3>
                <Eye />
              </div>
            </Link>
            <Link to='/cennik'>
              <div className='home-2-nav-small home-box'>
                <h3>Cenník</h3>
                <Euro />
              </div>
            </Link>
            <Link to='/#mapa'>
              <div className='home-2-nav-small home-box'>
                <h3>Mapa</h3>
                <Map />
              </div>
            </Link>
            <Link to='/#ordinacne-hodiny'>
              <div className='home-2-nav-small home-box'>
                <h3>Ordinačné hod.</h3>
                <AccessTime />
              </div>
            </Link>
            <Link  to='/#doktorka' className='home-2-nav-large home-box'>
              <BackgroundImage fluid={combined_bg}
                className='bg-box'
              >
                <h3>Doktorka</h3>
              </BackgroundImage>
            </Link>
            <div 
              className='home-2-bottom-box home-box'>
      
              <LinkButton
              href='/#kontakt'>
                Objednajte sa
              </LinkButton>
              <p>Alebo nám zavolajte v prípade akejkoľvek požiadavky.</p>
            </div>
          </div>
        </div>
    )
}

export default Home2
