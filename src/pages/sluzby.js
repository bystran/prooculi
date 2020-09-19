import React from "react"
import LinkButton from '../components/LinkButton';
import MagnGlass from '../assets/icons/magnifying_glass.svg';
import Glasses from '../assets/icons/glasses.svg';
import Flower from '../assets/icons/flower.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../saas/components/pages/services.scss';


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
    ]
  },
  {
    heading:`Starostlivosť`,
    data:[
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



const About = () => (
  <Layout>
    <SEO title="Page two" />
    <div className='services-page-wrapper'>
      <nav className='side-nav'>
        <h1>Služby</h1>
        <ul>
          <li>
            <MagnGlass />
            <h3>Vyšetrenia</h3>
          </li>
          <li>
            <Glasses />
            <h3>Starostlivosť</h3>
          </li>
          <li>
            <Flower />
            <h3>Estetická medicína</h3>
          </li>
        </ul>
      </nav>
      <div className='content'> 
        {
          servicesData.map( ctg =>
            <div className='service-catg'>
              <h2>{ctg.heading}</h2>
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

export default About
