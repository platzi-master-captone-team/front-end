import styled from "styled-components";

export const Menu = styled.ul`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const MenuItem = styled.li`
    display: flex;
    flex-direction: column;
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: var(--font-large);
    padding: 1rem;
    color: ${props => props.active ? 'black' : 'grey'};
`