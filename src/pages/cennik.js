import React from "react"
import { Link ,graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BgImage from 'gatsby-background-image';

import '../saas/components/pages/cennik.scss';

const priceData = [
  {
    category: `Vyšetrenia`,
    data:[
      {
        heading: `Kompletné očne vyšetrenie `,
        subheading: `predný segment, zraková ostrosť, vnútroočný tlak, očné pozadie s rozkvapkaním.`,
        price:35
      },
      {
        heading: `Vyšetrenie zrakovej ostrosti a predpis okuliarov `,
        subheading: ``,
        price:20
      },
      {
        heading: `Vyšetrenie oct`,
        subheading: ``,
        price:25
      },
      {
        heading: `Vyšetrenie oct + očný tlak + perimeter`,
        subheading: ``,
        price: 45
      },
      {
        heading: `Akútne vyšetrenie predného segmentu `,
        subheading: `zápal, cudzie teliesko, opuch, bolesť oka ...`,
        price: 25
      },
      {
        heading: `Akútne vyšetrenie zadného segmentu oka`,
        subheading: ``,
        price: 30
      },
      {
        heading: `Kontrolné vyšetrenie`,
        subheading: `(pozápalová, pooperačná, glaukómová)`,
        price: 15
      },
      {
        heading: `Vyšetrenie zorného poľa počítačovou perimetriou`,
        subheading: ``,
        price: 20
      },
      {
        heading: `Zmeranie vnútroočného tlaku kontaktným tonometrom`,
        subheading: ``,
        price: 5
      },
      {
        heading: `Preventívna prehliadka s perimetrom`,
        subheading: ``,
        price: 45
      },
      {
        heading: `Preventívna prehliadka bez perimetra`,
        subheading: ``,
        price: 30
      },
      {
        heading: `Vyšetrenie spôsobilosti`,
        subheading: `Pre prácu /zobrazovacie jednotky, lasery, vo výškach/, na zbrojný preukaz`,
        price: 35
      },
      {
        heading: `Vyšetrenie farbocitu`,
        subheading: ``,
        price: 5
      },
      {
        heading: `Vyšetrenie syndrómu suchého oka`,
        subheading: ``,
        price: 10 
      },
      {
        heading: `Nácvik aplikácie kontaktných šošoviek`,
        subheading: `skúšobné kontaktné šošovky, roztok`,
        price: 40,
      },
      {
        heading: `Konzultácia nálezu`,
        subheading: ``,
        price: 20,
      },

    ]
  },
  {
    category: `Chirurgické výkony`,
    data:[
      {
        heading: `Odstránenie jačmeňa`,
        subheading: ``,
        price: 50,
      },
      {
        heading: `Odstránenie znamienok, xantelaziem, bradavíc, tumorov v okolí oka`,
        subheading: ``,
        from: true,
        price: 50,
      },
      {
        heading: `Epilácia rias`,
        subheading: `Odstránenie znamienok, xantelaziem, bradavíc, tumorov v okolí`,
        from: true,
        price: 10,
      },
    ]
  },
  {
    category: `Estetická medicína`,
    data:[
      {
        heading: `Botulotoxín A 1 lokalita`,
        subheading: ``,
        price: 80,
      },
      {
        heading: `Skinbooster vital injector`,
        subheading: ``,
        price: 180,
      },
      {
        heading: `Niťový lifting`,
        subheading: ``,
        from: true,
        price: 40,
      }
    ]
  }
]

const Prices = ({data:{file:{img:{fluid}}}})  => {
  const bgStack = [
    `linear-gradient( rgba(108, 189, 208, 0.58) 0%, rgba(108, 189, 208, 0.78) 100%)`,
    fluid
  ]
  
  return (
    <Layout>
      <SEO title="Cenník" />
      <BgImage
        className='banner banner-2'
        fluid={bgStack}>
        <h1 className='white'>
           Cenník služieb
        </h1>
      </BgImage>
      <div className='cennik-content'>
        {
          priceData.map( catg => 
            <>
              <h2>{catg.category}
                <span>{` od ${Math.min(...catg.data.map(o => o.price))}€ do ${Math.max(...catg.data.map(o => o.price),0)}€`}</span></h2>
              <ul>
                {
                  catg.data.map(item => 
                    <li class='small-box-with-shadow'>
                      <h3>{item.heading}</h3>
                      <p>
                        {item.subheading}
                      </p>
                      <p className='price'>{`${item.from ? 'od': ''} ${item.price}€`}</p>
                    </li>
                  )
                }
              </ul>
            </>
          )
        }
      </div>

    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: {eq: "glasses.jpg"}) {
      img:childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Prices
