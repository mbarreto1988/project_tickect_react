import React from 'react'
import { useState } from 'react'
import EventItem from './components/eventItem/Index'
import eventsJSON from '../../data/events.json'


const Events = () => {
    
    const [data] = useState(eventsJSON)
    const events = data._embedded.events

    const handleEventItemClick = (id)=> {
        console.log('Evento clickeado', id);
        
    }

    return (
        <div>
            Eventois
            { 
                events.map((eventItem)=> (
                    <EventItem 
                        key={`event-item-${eventItem.id}`} 
                        id={eventItem.id}
                        name={eventItem.name}
                        info={eventItem.info}
                        image={eventItem.images[0].url}
                        onEventClick={handleEventItemClick}
                    />
                ))
            }
        </div>
    )
}

export default Events