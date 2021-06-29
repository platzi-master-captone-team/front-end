import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: center;
    max-width: 1366px;
    margin: 4rem auto;
    @media (max-width: 1024px) {
        flex-direction: column;
    }

`
