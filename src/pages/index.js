import React from "react"

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


const IndexPage = () => (
  <Layout>
    <SEO title="Domov" />

    <Home1 />
    <Home2 />
    <Home3 />
    <DocSction />
    <Contact />
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

export default IndexPage
