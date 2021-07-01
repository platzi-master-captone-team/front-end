import styled from "styled-components";


export const WeekCalendar = styled.section`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-flow: column;
    grid-gap: 10px;
    
`
export const Day = styled.div`
    
    
`
export const Label = styled.div`
    background: var(--color-lightgrey);
    font-weight: bold;
    font-size: var(--font-small);
    text-align: center;
    height: 20px;
    margin-bottom: 5px;
`

export const Slot = styled.div`
    background: ${props => props.active === 'active' ? 'rgb(226,157,22)' : 'rgb(226,157,22,0.15)'};
    text-align: center;
    height: 20px;
    margin-bottom: 5px;
`