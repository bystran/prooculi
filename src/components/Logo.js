import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';

import Image from 'gatsby-image'


const query = graphql`
  {
    file(relativePath: {eq: "logo.png"}) {
      img:childImageSharp  {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


const Logo = ({className}) => {
    const {file:{img:{fluid}}} = useStaticQuery(query);
    return (
        <Image fluid={fluid} className='logo-png' />
    )
}

export default Logo
