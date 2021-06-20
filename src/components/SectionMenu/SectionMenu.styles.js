import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Menu = styled.nav`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const MenuItem = styled(Link)`
    text-decoration: none;
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: var(--font-large);
    padding: 1rem;
    color: ${props => props.active ? 'black' : 'grey'};
    cursor: pointer;
`