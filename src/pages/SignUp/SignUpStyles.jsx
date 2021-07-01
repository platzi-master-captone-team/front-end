import styled from 'styled-components'

export const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 1366px;
    text-align: center;
    margin: 7rem auto;
    @media (max-width: 800px) {
        margin-top: 10rem;
        flex-direction: column;
    }
    
    
    
`
export const ImgWrapper = styled.div`
    width: 500px;
    @media (max-width: 800px) {
        order: 2;
        display: flex;
        flex-direction: column;
        width: 70%;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const SelectSection = styled.div`
    width: 450px;
    @media (max-width: 1016px) {
        display: flex;
        flex-direction: column;
        width: 40%;
    }
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    
`

export const Text = styled.p`
    margin-bottom: 4rem;
    font-size: var(--font-large);
`
export const Link = styled.a`
    height: auto;
    padding: 1.2rem 2rem;
    font-size: var(--font-medium);
    font-weight: bold;
    background: #FFB900;
    cursor: pointer;
    border-radius: 1rem;
    margin-right: 1.5rem;
    color: inherit;
    text-decoration: none;
    margin-bottom: 2rem;
    @media (max-width: 800px) {
        font-size: var(--font-large);
    }
`


