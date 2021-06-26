import styled from "styled-components";

export const MainChat = styled.main`
    max-width: 1366px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 3rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0.5rem;
    }
`