import styled from "styled-components";
import { Link } from 'react-router-dom';

export const BannerContainer = styled.section`
        display: ${props => props.$show ? 'flex' : 'none'};
        justify-content:center;
        align-items: center; 
        width: 100%;
        background: var(--color-primary);
        padding: 0.5rem;
        
`

export const BannerMessage = styled.p`
    font-size: var(--font-medium);
    font-weight: 700;
    width: 100%;
    text-align:center;
    @media (max-width: 760px) {
        display: flex;
        flex-direction:column;
    }
`

export const CloseBanner = styled.div`
    font-size: var(--font-medium);
    font-weight: 700;
    cursor: pointer;
`

export const BannerLink = styled(Link)`
    font-family: var(--font-primary);
    font-weight: bold;
    color: white;
    border-style: none;
    background: var(--color-tertiary);
    border-radius: 15px;
    text-decoration: none;
    margin: 0.5rem 1rem 0;
    padding: 0.1rem 1rem;
    display: ${props => props.type !== props.id ? 'none' : 'inline'};
    align-self: center;
`
