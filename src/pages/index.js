import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import all home page sections
import Home1 from "../components/sections/domov/home1";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home1 />

  </Layout>
)

export default IndexPage
