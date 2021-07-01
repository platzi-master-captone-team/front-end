import styled from "styled-components";


export const WeekCalendar = styled.section`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-flow: column;
    grid-gap: 10px;
    margin-bottom: 1rem;
    
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
    @media (max-width: 600px) {
        display: none;
    }
`
export const TimeLabel = styled.div`
    background: var(--color-lightgrey);
    font-weight: bold;
    font-size: var(--font-small);
    text-align: center;
    height: 20px;
    margin-bottom: 5px;
`

export const LabelResp = styled.div`
    background: var(--color-lightgrey);
    font-weight: bold;
    font-size: var(--font-small);
    text-align: center;
    height: 20px;
    margin-bottom: 5px;
    
    @media (min-width: 600px) {
        display: none;
    }
`

export const Slot = styled.div`
    background: ${props => props.active === 'active' ? 'rgb(226,157,22)' : 'rgb(226,157,22,0.15)'};
    text-align: center;
    height: 20px;
    margin-bottom: 5px;
    outline: none;
`

export const HiddenCheckbox = styled.input.attrs((props) => (
    { type: 'checkbox' }))
    `
    background: ${props => props.value === 'active' ? 'rgb(226,157,22)' : 'rgb(226,157,22,0.15)'};
    text-align: center;
    height: 20px;
    margin-bottom: 5px;
    outline: none;
`

export const FormButton = styled.button`
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: var(--font-medium);
    width: 90%;
    max-width: 400px;
    color: black;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-primary);
    border-radius: 15px;
    text-decoration: none;
    margin-right: 1rem;
`
