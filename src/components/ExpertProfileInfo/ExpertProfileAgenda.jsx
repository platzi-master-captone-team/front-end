import React, { useState } from 'react'
import { openPopupWidget } from 'react-calendly'
import Calendar from './Calendar'
import { AgendaSection, AgendaCard, AgendaTitle, PriceTag, Span, Division, TimeTitle, Select, Option, Schedule, ScheduleSelection, ScheduleButton } from './ExpertProfileInfoStyles'

const ExpertProfileAgenda = ({fee}) => {

    const onClick = () => openPopupWidget({ 
            url: "https://calendly.com/davidgaleano",
            pageSettings: {
                backgroundColor: "fffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "00a2ff",
                textColor: "4d5055"

            }
    });

    return (
        <AgendaSection>
            <AgendaCard>
                <AgendaTitle>Agenda una Consulta</AgendaTitle>
                <PriceTag>$/Hora <Span>${fee}</Span></PriceTag>
                <Division />
                <Calendar />
                <TimeTitle>Horarios Disponibles</TimeTitle>
                <Division />
                <Schedule>
                    <ScheduleSelection>10:00 a.m</ScheduleSelection>
                    <ScheduleSelection>11:00 a.m</ScheduleSelection>
                    <ScheduleSelection>12:00 p.m</ScheduleSelection>
                    <ScheduleSelection>2:00 p.m</ScheduleSelection>
                    <ScheduleSelection>3:00 p.m</ScheduleSelection>
                </Schedule>
                <ScheduleButton>Agendar Consulta</ScheduleButton>
            </AgendaCard>
        </AgendaSection>
    )
}

export default ExpertProfileAgenda
