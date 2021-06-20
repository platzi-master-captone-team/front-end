import styled from "styled-components";

import avatar from '../../assets/images/avatar2.png';

import { Link } from 'react-router-dom';

export const Card = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 1rem;
`

export const Avatar = styled.img`
    padding: 1rem 0 1rem 2rem;
`
Avatar.defaultProps = {
    src: avatar
};

export const BookingDetails = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`

export const BookingTitle = styled.p`
    font-weight: 700;
    padding: 0.5rem;
`

export const BookingDate = styled.p`
    
`

export const BookingTime = styled.p`
    padding-top: 0.2rem;    
`

export const JoinChat = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0.5rem;

`

export const ChatLink = styled(Link)`
    font-family: var(--font-primary);
    font-weight: bold;
    color: white;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-primary);
    border-radius: 15px;
    text-decoration: none;
    margin-right: 1rem;
`
export const Indicator = styled.div`
    background: ${props => props.status === 'active' ? '#6FCF97' : '#BDBDBD'};
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 0 1rem;
`