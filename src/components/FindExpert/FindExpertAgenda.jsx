import React from 'react'
import Calendar from './Calendar'
import { AgendaCard, AgendaTitle, PriceTag, Span, Division, TimeTitle, Select, Option, Schedule, ScheduleSelection, ScheduleButton } from './FindExpertStyles'

const ProfileAgenda = () => {
    return (
        <AgendaCard>
            <AgendaTitle>Agenda una Consulta</AgendaTitle>
            <PriceTag>$/Hora <Span>$25.00</Span></PriceTag>
            <Division />
            <Calendar style={{"border": "none"}} />
            <Division />
            <TimeTitle>Horarios Disponibles</TimeTitle>
            <Select>
                <Option>Selecciona Zona Horaria</Option>
            </Select>
            <Schedule>
                <ScheduleSelection>10:00 a.m</ScheduleSelection>
                <ScheduleSelection active={true}>11:00 a.m</ScheduleSelection>
                <ScheduleSelection>12:00 p.m</ScheduleSelection>
                <ScheduleSelection>2:00 p.m</ScheduleSelection>
                <ScheduleSelection>3:00 p.m</ScheduleSelection>
            </Schedule>
            <ScheduleButton>Agendar Consulta</ScheduleButton>

        </AgendaCard>
    )
}

export default ProfileAgenda
