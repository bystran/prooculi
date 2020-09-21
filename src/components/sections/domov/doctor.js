import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import '../../../saas/components/sections/HomeDoctor.scss';
import BackgroundImage from 'gatsby-background-image';

const query = graphql`
  {
    file(relativePath: {eq: "doctor.png"}) {
      img:childImageSharp  {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Doctor = () => {
    const {file:{img:{fluid}}} = useStaticQuery(query);
    return (
        <div className="doctor-section" id='doktorka'>
            <h2>
                Očný lekár
            </h2>
            <h1> 
                MUDr. Henrieta Marková
            </h1> 
            <p>
                Štúdium na Jeseniovej lekárskej fakulte Univerzity
                Komenského v Martine ukončila v roku 2008.  Od roku
                2008 do roku 2012 pracovala na Angiochirurgii UN Bratislava
                Od roku 2012 do roku 2017 pracovala na Očnej klinike
                SZU Univerzitnej nemocnice Bratislava a v súkromnej očnej
                ambulancii Mauro Simon v Pezinku. Od roku 2017 po súčasnosť
                pracuje v Centre mikrochirurgie oka Bratislava V roku 2019
                získala atestáciu z medicínskeho oboru oftalmológia.
                Absolvovala odborné školenia a kongresy v oblasti estetickej
                medicíny,  je držiteľkou mnohých certifikátov v oblasti
                aplikácie botulotoxínu, kyseliny hyalurónovej, liftingových
                nití, biorevitalizačných metód. 


            </p>
            <div className="doctor-img">
              <BackgroundImage 
                fluid={fluid} 
                className='doctor-bg' 
                
                style={{
                  backgroundPosition:'contain'
                }}
              >
    
              </BackgroundImage>
            </div>

        </div>
    )
}

export default Doctor
