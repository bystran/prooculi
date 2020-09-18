import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const sevicesData = [
  {
    heading: `Vyšetrenia`,
    data: [
      {
        heading: `zrakovej ostrosti, očného pozadia, predného segmentu oka`,
        subheading: ``
      },
      {
        heading: `objektívnej refrakcie`,
        subheading: `automatickým refraktometrom`
      },
      {
        heading: `meranie vnútroočného tlaku`,
        subheading: `bezkontaktným tonometrom`
      },
      {
        heading: `meranie hrúbky rohovky`,
        subheading: `bezkontaktným pachymetrom`
      },
      {
        heading: `zorného poľa`,
        subheading: `pri určovaní zmien v periférnom videní napr. pri glaukóme, neurologických ochoreniach, ochoreniach sietnice i pri vyšetrení spôsobilosti na vedenie motorových vozidiel`
      },
      {
        heading: `farbocitu `,
        subheading: `pri zhodnotení spôsobilosti na vedenie motorových vozidiel i určovaní farbosleposti`
      },
      {
        heading: `syndrómu suchého oka`,
        subheading: `zisťujeme produkciu sĺz Schirmerovým testom a kvalitu sĺz Break-up time testom`
      },
      {
        heading: `komplexné vyšetrenie`,
        subheading: `pri podozrení Zelený zákal (glaukóm) alebo Šedý zákal (katarakta)`
      },
      {
        heading: `diagnostiku vekom podmienenej makulárnej degenerácie`,
        subheading: ``
      },
      {
        heading: `vyšetrenie spôsobilosti`,
        subheading: `na vedenie motorových vozidiel, vo vzťahu k práci alebo na zbrojný preukaz`
      },
      {
        heading: `očí pri systémových ochoreniach `,
        subheading: `cukrovka, vysoký krvný tlak a iné...`
      },
      {
        heading: `kontroly po očných operáciách`,
        subheading: ``
      },
      {
        heading: `preventívne vyšetrenia `,
        subheading: ``
      },
    ]
  }
] 



const About = () => (
  <Layout>
    <SEO title="Page two" />
  </Layout>
)

export default About
