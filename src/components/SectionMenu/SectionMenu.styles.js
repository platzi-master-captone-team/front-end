import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (max-width: 760px) {
        display: none;
    }
`
export const MenuItem = styled(Link)`
    text-decoration: none;
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: var(--font-large);
    padding: 1rem;
    color: ${props => props.active === props.id ? 'black' : 'grey'};
    cursor: pointer;
    display: ${props => props.$show === props.profile ? 'inline' : 'none'};
`

