import React from 'react'
import { useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import LinkButton from '../../LinkButton';
import '../../../saas/components/sections/HomeOne.scss';

const query = graphql`
  {
    file(relativePath: {eq: "shutterstock_176457746.jpg"}) {
      img:childImageSharp  {
        fluid (maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Home1 = () => {
    const {file:{img:{fluid}}} = useStaticQuery(query);

    const combined_bg = [
        `linear-gradient(125deg, #90e0ef 0%, rgba(108, 189, 208, 0.78) 14.11%, rgba(40, 169, 200, 0.24) 65.27%, rgba(20, 163, 197, 0.07) 100%)`,    
        fluid
    ]
    const style={
        // Defaults are overwrite-able by setting one or each of the following:
        backgroundSize: 'cover, auto 100%',
        backgroundPosition: 'center, right center',
      }

    return (
        <BackgroundImage 
        fluid={combined_bg}
        className='home-1'
        style={style}>
            <h2>
                Očná Ambulancia
            </h2>
            <h1>
                Krajší pohľad na svet
            </h1>
            <LinkButton
              href="/#o-nas"
            >
                Zistite viac
            </LinkButton>
        </BackgroundImage>
    )
}

export default Home1
