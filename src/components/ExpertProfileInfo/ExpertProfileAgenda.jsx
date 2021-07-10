import React, { useState, useEffect } from 'react'
import { openPopupWidget } from 'react-calendly'
import Calendar from './Calendar'
import { AgendaSection, AgendaCard, AgendaTitle, PriceTag, Span, Division, TimeTitle, Select, Option, Schedule, ScheduleSelection, ScheduleButton, ScheduleDate, Date, Currency } from './ExpertProfileInfoStyles'
import slotsJSON from './mockSlots.json';
import { useHistory } from 'react-router';

const ExpertProfileAgenda = ({fee, name, id}) => {

    const history = useHistory();

    const [slots, setSlots] = useState(slotsJSON);
    const [dates, setDates] = useState([]);
    const [times, setTimes] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState();
    const [isReady, setIsReady] = useState(true);

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

    }

    function handleTimeClick (ev) {
        const id = ev.target.id;
        setSelectedTime(id);
        setIsReady(false);

    }

    function handleSchedule () {
        const toURL= '/pago?fee='+fee+'&date='+selectedDate+'&time='+selectedTime+'&name='+name+'&id='+id;
        history.push(toURL);
    }

    return (
        <AgendaSection>
            
            <AgendaCard>
                <AgendaTitle>Agenda una Consulta</AgendaTitle>
                <PriceTag>$/Hora <Span>${fee} USD</Span></PriceTag>
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
                <ScheduleButton disabled={isReady} onClick={handleSchedule}>Agendar Consulta</ScheduleButton>
            </AgendaCard>
        </AgendaSection>
    )
}

export default ExpertProfileAgenda
