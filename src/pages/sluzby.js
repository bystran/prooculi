import React from "react"
import {graphql, Link} from 'gatsby'
import LinkButton from '../components/LinkButton';
import MagnGlass from '../assets/icons/magnifying_glass.svg';
import Surgery from '../assets/icons/surgery.svg';
import Flower from '../assets/icons/flower.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import BgImage from 'gatsby-background-image';
import '../saas/components/pages/services.scss';

import slugify from 'slugify'


const servicesData = [
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
      {
        heading: `korekcia refrakčných chýb oka, predpis okuliarov `,
        subheading: ``
      },
      {
        heading: `dispenzárna starostlivosť`,
        subheading: `pri chronických ochoreniach /glaukóm, VPDM, diabetická retinopatia`
      },
      {
        heading: `kontaktné šošovky`,
        subheading: `vyšetrenie, nácvik aplikácie, kontroly`
      },
    ]
  },
  {
    heading:`Chirurgické výkony`,
    data:[
      {
        heading: `Odstránenie jačmeňa`,
        subheading: ``
      },
      {
        heading: `Odstránenie znamienok, xantelaziem, bradavíc, tumorov v okolí oka`,
        subheading: ``
      },
      {
        heading: `Epilácia rias`,
        subheading: ``
      },
    ],
  },
  {
    heading:`Estetická medicína`,
    data:[
      {
        heading: `Aplikácia botulotoxínu A na odstránenie vrások `,
        subheading: ``
      },
      {
        heading: `Niťový lifting`,
        subheading: ``
      },
      {
        heading: `Skinbooster a biorevitalizácia prístrojom vital injector`,
        subheading: ``
      },
    ],
  },
] 



const Services = ({data:{file:{img:{fluid}}}}) =>
{
  const bgStack = [
    `linear-gradient( rgba(108, 189, 208, 0.58) 0%, rgba(108, 189, 208, 0.78) 100%)`,
    fluid
  ]

    return(

    <Layout>
      
      <SEO title="Služby" />

      <BgImage
        className='banner'
        fluid={bgStack}>
        <h2>Krajší pohľad na svet</h2>
        <h1 className='white'>
        Pozrieme sa 
        na vaše Oči
        </h1>
      </BgImage>
    

      <div className='services-page-wrapper'>
        <nav className='side-nav'>
          <h1>Služby</h1>
          <ul>
            <Link to="#vysetrenia">
              <li>
                <MagnGlass />
                <h3>Vyšetrenia</h3>
              </li>
            </Link>
            <Link to="#chirurgicke-vykony">
              <li>
                <Surgery />
                <h3>Chirurgické výkony</h3>
              </li>
            </Link>
            <Link to="#esteticka-medicina">
              <li>
                <Flower />
                <h3>Estetická medicína</h3>
              </li>
            </Link>
          </ul>
        </nav>
        <div className='content'> 
          {
            servicesData.map( ctg =>
              <div className='service-catg' id={slugify(ctg.heading,{lower:true})}>
                <h2 >{ctg.heading}</h2>
                <ul>
                  {
                    ctg.data.map(service => 
                      <li>
                        <h3>
                          {service.heading}
                        </h3>
                        <p>
                          {service.subheading}
                        </p>
                      </li>  
                    )
                  }
                </ul>
              </div>
            )
          }
        </div>
      </div>
      <div className='btn-wrp'>
        <LinkButton
          href="/cennik"
        >
          Pozriet si ceny
        </LinkButton>
        <LinkButton
          href='/#kontakt'
        >
          Objednať sa
        </LinkButton>



      </div>

    </Layout>
  )
}
export const query = graphql`
  {
    file(relativePath: {eq: "lady_holding_glasses.jpg"}) {
      img:childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Services
