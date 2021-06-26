import styled from 'styled-components'

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 3.5rem auto;
    max-width: 1366px; 
    
`
export const ImgWrapper = styled.div`
    width: 200px;
`

export const RegisterImage = styled.img`
    width: 380px;
    @media (max-width: 1005px){
        width: 50%;
    }
`
