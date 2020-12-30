import React from "react"
import {useStaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import all home page sections
import Home1 from "../components/sections/domov/home1";
import Home2 from "../components/sections/domov/home2";
import Home3 from "../components/sections/domov/home3";
import DocSction from '../components/sections/domov/doctor';
import Contact from '../components/sections/domov/contatct';
import Facebook from '../components/sections/domov/facebook';
import LazyLoad from 'react-lazyload'
import Spinner from 'react-spinners/CircleLoader'
import OverlayBanner from "../components/overlayBanner/overlayBanner";

const query = graphql`
  {
    file(relativePath: {eq: "banner-lady.png"}) {
      img:childImageSharp  {
        fluid (maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


const IndexPage = () => {
  const {file:{img:{fluid}}} = useStaticQuery(query);

  const combined_bg = [
      `linear-gradient(0deg, #90e0ef 0%, rgba(108, 189, 208, 1) 14.11%, rgba(108, 189, 208, 0.93) 35.27%, rgba(108, 189, 208, 0.1) 70%, rgba(108, 189, 208, 0.07) 100%)`,    
      fluid
  ]
  return (
    <Layout>
      <SEO title="Domov" />
      <OverlayBanner 
        background={combined_bg}
      />

      <Home1 />
      <Home2 />
      <Home3 />
      <DocSction />
      <div id='kontakt'></div>
      <div id='ordinacne-hodiny'></div>
      
      <LazyLoad
        height='1000'
        offset='1000'
        placeholder={<Spinner />} 
      >
        <Contact />
      </LazyLoad>
      <div id='mapa'></div>
      <LazyLoad
        height='400'
        offset='500'
        placeholder={<Spinner />} 
      >
        <Facebook />
      </LazyLoad>

    </Layout>
  )
}

export default IndexPage
