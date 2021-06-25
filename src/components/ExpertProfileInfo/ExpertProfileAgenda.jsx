import React, { useState } from 'react'
import Calendar from './Calendar'
import { AgendaCard, AgendaTitle, PriceTag, Span, Division, TimeTitle, Select, Option, Schedule, ScheduleSelection, ScheduleButton } from './ExpertProfileInfoStyles'

const ExpertProfileAgenda = ({fee}) => {

    const [active, setActive]= useState(false);

    const schedule = ['10:00 a.m', '11:00 a.m', '12:00 p.m', '2:00 p.m'];

    return (
        <AgendaCard>
            <AgendaTitle>Agenda una Consulta</AgendaTitle>
            <PriceTag>$/Hora <Span>${fee}</Span></PriceTag>
            <Division />
            <Calendar style={{"border": "none"}} />
            <Division />
            <TimeTitle>Horarios Disponibles</TimeTitle>
            <Select>
                <Option>Selecciona Zona Horaria</Option>
            </Select>
            <Schedule>
                {
                  schedule.map(item => 
                      <ScheduleSelection
                        key={item}
                        active={active}
                        onClick={()=>{active === true ? setActive(false) : setActive(true) }}
                      >
                      {item}
                      </ScheduleSelection>
                  )  
                }
            </Schedule>
            <ScheduleButton onClick={event =>  window.location.href='/pago'}>Agendar Consulta</ScheduleButton>

        </AgendaCard>
    )
}

export default ExpertProfileAgenda
