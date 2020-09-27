
import React from 'react'
import moment from 'moment';
import MailIcon from '../../../assets/icons/email.svg';
import PhoneIcon from '../../../assets/icons/phone_icon.svg';
import MessengerIcon from '../../../assets/icons/messenger.svg';
import PlaceIcon from '../../../assets/icons/place.svg';
import Map from 'google-map-react'


import {useStaticQuery, graphql} from 'gatsby';

import Image from 'gatsby-image'


import '../../../saas/components/sections/Contact.scss';

const query = graphql`
  {
    file(relativePath: {eq: "place_marker.png"}) {
      img:childImageSharp  {
        fluid (maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`



const workingHours = [
    {
        id: 1,
        label: 'Pondelok',
        start: '8:00',
        end: `16:00`
    },
    {
        id: 2,
        label: `Utorok`,
        start: `10:00`,
        end: `18:00`,
    },
    {
        id: 3,
        label: `Streda`,
        start: `8:00`,
        end: `16:00`,
    },
    {
        id: 4,
        label: `Štvrtok`,
        start: `8:00`,
        end: `16:00`
    },
    {
        id: 5,
        label: `Piatok`,
        start: `8:00`,
        end: `14:00`
    }
]
const phone = '0911 938 970'
const email = 'info@prooculi.sk'

const Contact = () => {
    const currentDate = moment().day();
    const {file:{img:{fluid}}} = useStaticQuery(query);
    return (
        <div className='contact-section'>
            <div className='working-hours' id='ordinacne-hodiny'>
                <h1>
                    Otváracie hodiny
                </h1>
                <ul className='working-hours-ul'>
                    {
                        workingHours.map(day=>
                            <li key={day.id} className={`${day.id === currentDate ? 'active': ''}`}>
                                <h3 className='work-day'>
                                    {day.label}
                                </h3>
                                <h3 className='opn-hrs'>
                                    {`${day.start} - ${day.end}`}
                                </h3>
                                
                            </li>
                        )

                    }
                </ul>
            </div>
            <div className='contact-card'  id='kontakt'>
                <h1 className='info'>Kontakt</h1>
                <div className='info'>
                    <PlaceIcon />
                    <address className='company text' >
                        <h3>PROOCULI s.r.o.</h3>
                        <h3>Očná ambulancia</h3>
                        <p>Zdravotno-relaxačné centrum 2/B</p>
                        <p>Lipnická 2</p>
                        <p>90042 Dunajská Lúžna</p>
                    </address>
                </div>
                <div className="info">
                    <MailIcon />
                    <a className="text" href={ `mailto: ${{ email }}` }>
                        { email }
                    </a>
                </div>
                <div className="info">
                    <PhoneIcon />
                    <a className="text" href={ `mailto: ${{ phone }}` }>
                        { phone }
                    </a>
                </div>

                <div className="info">
                    <MessengerIcon />
                    <a className="text" href="/">
                        messenger
                    </a>
                </div>


            </div>
            <div className='map-wrapper' id='mapa'>
                    <Map
                        bootstrapURLKeys={
                          {
                            key:'AIzaSyCTZmceKVhKYRziQ-rTyAQ5JGSaiA-2CeM'
                          }
                        }
                        defaultCenter={
                            {
                                lat: 48.0832678,
                                lng: 17.2604439
                            }
                        }
                        defaultZoom={15}
        
                        options={ () => { return {
                          panControl: false,
                          mapTypeControl: false,
                          scrollwheel: false,
                          zoomControl:false,
                          rotateControl:false,
                          scaleControl:false,
                          fullscreenControl:false,
                          gestureHandling:false,
                          styles:[
                              {
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#1d2c4d"
                                  }
                                ]
                              },
                              {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#8ec3b9"
                                  }
                                ]
                              },
                              {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                  {
                                    "color": "#1a3646"
                                  }
                                ]
                              },
                              {
                                "featureType": "administrative.country",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                  {
                                    "color": "#4b6878"
                                  }
                                ]
                              },
                              {
                                "featureType": "administrative.land_parcel",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#64779e"
                                  }
                                ]
                              },
                              {
                                "featureType": "administrative.province",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                  {
                                    "color": "#4b6878"
                                  }
                                ]
                              },
                              {
                                "featureType": "landscape.man_made",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                  {
                                    "color": "#334e87"
                                  }
                                ]
                              },
                              {
                                "featureType": "landscape.natural",
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#023e58"
                                  }
                                ]
                              },
                              {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#283d6a"
                                  }
                                ]
                              },
                              {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#6f9ba5"
                                  }
                                ]
                              },
                              {
                                "featureType": "poi",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                  {
                                    "color": "#1d2c4d"
                                  }
                                ]
                              },
                              {
                                "featureType": "poi.park",
                                "elementType": "geometry.fill",
                                "stylers": [
                                  {
                                    "color": "#023e58"
                                  }
                                ]
                              },
                              {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#3C7680"
                                  }
                                ]
                              },
                              {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#304a7d"
                                  }
                                ]
                              },
                              {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#98a5be"
                                  }
                                ]
                              },
                              {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                  {
                                    "color": "#1d2c4d"
                                  }
                                ]
                              },
                              {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#2c6675"
                                  }
                                ]
                              },
                              {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                  {
                                    "color": "#255763"
                                  }
                                ]
                              },
                              {
                                "featureType": "road.highway",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#b0d5ce"
                                  }
                                ]
                              },
                              {
                                "featureType": "road.highway",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                  {
                                    "color": "#023e58"
                                  }
                                ]
                              },
                              {
                                "featureType": "transit",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#98a5be"
                                  }
                                ]
                              },
                              {
                                "featureType": "transit",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                  {
                                    "color": "#1d2c4d"
                                  }
                                ]
                              },
                              {
                                "featureType": "transit.line",
                                "elementType": "geometry.fill",
                                "stylers": [
                                  {
                                    "color": "#283d6a"
                                  }
                                ]
                              },
                              {
                                "featureType": "transit.station",
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#3a4762"
                                  }
                                ]
                              },
                              {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                  {
                                    "color": "#0e1626"
                                  }
                                ]
                              },
                              {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                  {
                                    "color": "#4e6d70"
                                  }
                                ]
                              }
                            ] 
                            }
                          }
                        }
                    
                    >
                       <Image fluid={fluid} lat="48.083349" lng="17.262696" />

                    </Map>

            </div>

        </div>
    )
}

export default Contact
