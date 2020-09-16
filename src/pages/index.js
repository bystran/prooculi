import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import all home page sections
import Home1 from "../components/sections/domov/home1";
import Home2 from "../components/sections/domov/home2";
import Home3 from "../components/sections/domov/home3";
import DocSction from '../components/sections/domov/doctor';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home1 />
    <Home2 />
    <Home3 />
    <DocSction />
  </Layout>
)

export default IndexPage
