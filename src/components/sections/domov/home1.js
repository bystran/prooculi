import React from 'react'
import { useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import LinkButton from '../../LinkButton';
import '../../../saas/components/sections/HomeOne.scss';

const query = graphql`
  {
    file(relativePath: {eq: "shutterstock_176457746.jpg"}) {
      img:childImageSharp {
        fluid {
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

    return (
        <BackgroundImage 
        fluid={combined_bg}
        className='home-1'>
            <h2>
                Očná Ambulancia
            </h2>
            <h1>
                Majte Krajší pohľad na svet
            </h1>
            <LinkButton>
                Zistite via
            </LinkButton>
        </BackgroundImage>
    )
}

export default Home1
