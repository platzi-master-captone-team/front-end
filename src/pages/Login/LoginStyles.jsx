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
    width: 350px;
    @media (max-width: 900px) {
       display: none; 
    }
    @media (max-width: 1016px) {
        width: 35%;
    }
`

export const Image = styled.img`
    width: 100%;
`
