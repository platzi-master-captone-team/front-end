import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1366px;
    margin: 3rem auto;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 1280px) {
        width: 80%;
    }

`
