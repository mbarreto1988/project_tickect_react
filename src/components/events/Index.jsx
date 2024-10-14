import React from 'react'
import { useState } from 'react'
import EventItem from './components/eventItem/Index'
import eventsJSON from '../../data/events.json'


const Events = ({ searchTerm }) => {
    
    const [data] = useState(eventsJSON)
    const events = data._embedded.events

    const handleEventItemClick = (id)=> {
        console.log('Evento clickeado', id);    
    }

    const renderEvents = ()=>{
        let eventsFiltered = events

        if(searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter( (item)=>item.name.toLocaleLowerCase().includes(searchTerm) )
        }

        return eventsFiltered.map((eventItem)=> (
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

    return (
        <div>
            Eventois
            { renderEvents() }
        </div>
    )
}

export default Events