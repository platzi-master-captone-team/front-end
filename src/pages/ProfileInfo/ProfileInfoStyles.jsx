import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    max-width: 1366px;
    margin: 3rem auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 1280px) {
        width: 80%;
    }

`
