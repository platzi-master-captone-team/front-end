import styled from 'styled-components'

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: auto;
    margin: 3.5rem auto;
    max-width: 1366px; 
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`
export const ImgWrapper = styled.div`
    width: 500px;
    @media (min-width: 1025px) {
        width: 30%;
    }
    @media (max-width: 1092px) {
        display: none;
    }
`

export const RegisterImage = styled.img`
    width: 100%;
`
