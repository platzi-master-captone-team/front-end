import React, { useState } from 'react'
import { openPopupWidget } from 'react-calendly'
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
                <ScheduleButton onClick={onClick}>Agendar Consulta</ScheduleButton>
            </AgendaCard>
        </AgendaSection>
    )
}

export default ExpertProfileAgenda
