import React, { useState, useEffect } from 'react'
import { openPopupWidget } from 'react-calendly'
import Calendar from './Calendar'
import { AgendaSection, AgendaCard, AgendaTitle, PriceTag, Span, Division, TimeTitle, Select, Option, Schedule, ScheduleSelection, ScheduleButton, ScheduleDate, Date } from './ExpertProfileInfoStyles'
import slotsJSON from './mockSlots.json';

const ExpertProfileAgenda = ({fee, name}) => {

    const [slots, setSlots] = useState(slotsJSON);
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState();

    let orderDate = '';
    let orderTime = '';

    useEffect(() => {
        const dates2 = Array.from(slots.map( item => { return item.date }));
        setDates(dates2);
      }, []);
    
    function handleDateClick (ev) {
        const id = ev.target.id;
        const showTimes = [];
        slots.map( item => {
            if(item.date === id) {
                item.slots.forEach(slot => showTimes.push(slot))
            }    
        });
        setTimes(showTimes);
        setSelectedDate(id);
        orderDate = id;
    }

    function handleTimeClick (ev) {
        const id = ev.target.id;
        setSelectedTime(id);
        orderTime = id;
    }

    return (
        <AgendaSection>
            
            <AgendaCard>
                <AgendaTitle>Agenda una Consulta</AgendaTitle>
                <PriceTag>$/Hora <Span>${fee}</Span></PriceTag>
                <Division />
                <AgendaTitle>Selecciona una Fecha Disponible</AgendaTitle>
                <ScheduleDate>
                {dates
                    .map((date) => 
                    <Date key={date} id={date} name={date} selected={selectedDate} onClick={handleDateClick} >{date}</Date>   
                )}
                </ScheduleDate>
                
                <TimeTitle>Horarios Disponibles</TimeTitle>
                <Division />
                <Schedule>
                {times
                    .map((time) => 
                    <ScheduleSelection 
                        key={time} id={time} name={time} selected={selectedTime} onClick={handleTimeClick}>{time}:00
                    </ScheduleSelection>   
                )}
                </Schedule>
                <ScheduleButton to={'/pago?fee='+fee+'&date='+orderDate+'&time='+orderTime}>Agendar Consulta</ScheduleButton>
            </AgendaCard>
        </AgendaSection>
    )
}

export default ExpertProfileAgenda
