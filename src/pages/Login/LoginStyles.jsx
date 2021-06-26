import styled from 'styled-components'

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    height: auto;
    margin: 3.5rem auto;
    max-width: 1366px;
    @media (max-width: 768px) {
       flex-direction: column; 
    }

     
    
`
export const ImgWrapper = styled.div`
    @media (max-width: 900px) {
       display: none; 
    }
`

export const Image = styled.img`
    width: 350px;
`
