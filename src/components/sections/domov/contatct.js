
import React from 'react'
import moment from 'moment';
import '../../../saas/components/sections/Contact.scss';

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
        end: `18:30`,
    },
    {
        id: 3,
        label: `Streda`,
        start: `8:00`,
        end: `16:30`,
    },
    {
        id: 4,
        label: `Štvrtok`,
        start: `-`,
        end: `-`
    },
    {
        id: 5,
        label: `Piatok`,
        start: `8:00`,
        end: `14:30`
    }
]

const Contact = () => {
    const currentDate = moment().day()
    return (
        <div className='contact-section'>
            <div className='working-hours'>
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

        </div>
    )
}

export default Contact
