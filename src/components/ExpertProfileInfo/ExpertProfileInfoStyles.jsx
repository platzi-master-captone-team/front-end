import styled, { css } from 'styled-components'

import img from '../../assets/images/location.svg'
import linkedin from '../../assets/images/linkedin-white-logo.svg'
import github from '../../assets/images/github-white-logo.svg'
import save from '../../assets/images/save-icon.svg'


// Mixins
const Card = ({ height }) => css`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: ${height || "auto"}; 
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 3rem 3rem;
    margin: 0 auto 2rem auto;
    @media (max-width: 768px) {
        flex-grow: 1;
        width: 90%;
        padding: 3rem 4rem;
    }
`
const Title =  css`
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: var(--font-large);
    margin: 1rem 0 0.2rem;
    @media (max-width: 768px) {
        align-self: center;
        font-size: var(--font-medium);
    }    
`
// Variables
export const Division = styled.hr`
    margin: 0.8rem 0;
    border: 0;
    height: 1px;
    background: #E8E8E8;
`

// Profile Info
export const ProfileSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
    }    
`
export const ProfileCard = styled.div`
    ${Card}
`
export const Avatar = styled.img`
    width: 7rem;
    height: 7rem; 
    background: gray;
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 9rem;
        height: 9rem;
        align-self: center;
    }         
`
export const Name = styled.h3`
    ${Title}
`
export const Expertise = styled.p`
    font-weight: bold;
    font-size: var(--font-medium);
    color: #777777;
    line-height: 15px;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
        align-self: center;
        font-size: var(--font-medium);
    }         
`
export const Location = styled.p`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: var(--font-small);
    color: #777777;
    line-height: 15px;
    margin: 0.5rem 0;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
        line-height: 2rem;
        align-self: center;
    }         
    &::before {
        content: "";
        display: block;
        background-image: url(${img});
        background-size: 11px 11px;
        width: 11px;
        height: 11px;
        margin-right: 2px;
    }
`
export const Social = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0 1.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const SocialButton = styled.a `
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: black;
    color: white;
    width: 100px;
    text-align: center;
    font-size: 0.7rem;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    &::before {
        content: "";
        display: block;
        background-image: ${props => `url(${
            (props.value === "github") ? github :
            (props.value === "linkedin") ? linkedin : 
            (props.value === "curriculum") ? save : 
            ""
        })`};
        background-size: 12px 12px;
        width: 12px;
        height: 12px;
        @media (max-width: 768px) {
            background-size: 18px 18px;
            width: 18px;
            height: 18px;
            margin-right: 15px;
        }   
    }
    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        padding: 0.9rem 0;
        margin-bottom: 1rem;
        margin-right: 20px;
        font-size: var(--font-medium);
        
    }

`
export const Skills = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`
export const SkillTag = styled.div `
    background: var(--color-lightgrey);
    color: #000000;
    width: auto;
    text-align: center;
    font-size: var(--font-small);
    font-weight: bold;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    margin: 0 1rem 1rem 0;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
    }   
    
`

export const Description = styled.p`
    font-weight: normal;
    font-size: var(--font-small);
    line-height: 18px;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
    }    
`

// Experience Info
export const ExperienceCard = styled.div`
    ${Card}
`
export const ExperienceTitle = styled.h3`
    ${Title}
`
export const ExperienceInfo = styled.p`
    font-weight: normal;
    font-size: var(--font-small);
    line-height: 18px;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
    }    
`
// Education Info
export const EducationCard = styled.div`
    ${Card}
`
export const EducationTitle = styled.h3`
    ${Title}
`
export const EducationInfo = styled.p`
    font-weight: normal;
    font-size: var(--font-small);
    line-height: 18px;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
    }    
`

// Profile Agenda
export const AgendaSection = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
    }    
`
export const AgendaCard = styled.div`
    ${Card}
`
export const AgendaTitle = styled.h3`
    ${Title}
`
export const PriceTag = styled.p`
    margin: 1.5rem 0;
    font-weight: medium;
    font-size: 1.5rem;
    @media (max-width: 768px) {
        font-size: 2rem;
    }        
`
export const Span = styled.span`
    display: inline-block;
    margin-left: 2rem;
    font-weight: bold;
`
export const TimeTitle = styled.h3 `
    ${Title}
`
export const Select = styled.select`
    background: none;
    border: none;
    font-weight: bold;
    padding: 1rem 0.5rem 1rem 0;
    cursor: pointer;
`
export const Option = styled.option`
`
export const Schedule = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const ScheduleSelection = styled.a`
    background: ${(props) => 
        (props.active === true) ? "var(--color-primary)" : "var(--color-lightgrey)"
    };
    padding: 0.5rem;
    width: 100px;
    height: 2rem;
    border-radius: 8px;
    font-weight: bold;
    font-size: var(--font-small);
    color: inherit;
    text-decoration: none;
    text-align: center;
    margin: 0.5rem 0.25rem 0;
    cursor: pointer;
`

export const ScheduleButton = styled.button`
    width: 100%;
    font-family: var(--font-primary);
    font-size: var(--font-medium);
    font-weight: bold;
    background: var(--color-primary);
    padding: 0.8rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    margin: 2rem auto;   
    @media (max-width: 768px) {
        font-size: var(--font-large);
    }         
`

