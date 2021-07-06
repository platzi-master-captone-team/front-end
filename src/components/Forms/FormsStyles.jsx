import styled from 'styled-components'

export const MainContainer = styled.div `
    display: Flex;
    flex-direction: column;
    width: ${props => props.Width};
    padding: ${props => props.Padding};
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-family: "Karla", sans-serif;
    @media (max-width: 768px){
        width: 90%;
        flex-grow: 1;
        padding: 2.5rem;
        margin: 0 1rem;
    }
`

export const FormContainer = styled.form`
    
`
export const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: var(--font-large);
    margin-bottom: 2.2rem;
`

export const TextIndicator = styled.p`
    font-size: var(--font-medium);
`

export const SocialButtons = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`
export const SocialButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.buttonWidth};
    height: 40px;
    border: 0.8px solid #e2dfdf;
    border-radius: 1.2rem;
    font-weight: bold;
    font-size: var(--font-x-small);
    text-decoration: none;
    color: black;
    margin-bottom: ${props => props.marginBottom};
    cursor: pointer;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`
export const SocialButtonImg = styled.img`
    width: 1.2rem;
    margin-right: 5px;
`
export const Inputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 3rem;
`

export const InputContainer = styled.div`
    width: ${props => props.width || "250px"};
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const InputLabel = styled.label`
    display: inline-block;
    width: 100%;
    font-weight: bold;
    font-size: var(--font-medium);
    margin-bottom: 0.5rem;
`

export const Input = styled.input`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 1rem;
    border: none;
    background: #f3f3f3;
    padding: 0.8rem;

`
export const Select = styled.select`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 1rem;
    border: none;
    background: #F5F5F5;
    padding: 0.8rem;
    cursor: pointer;
`
export const Option = styled.option``

export const Error = styled.span`
    display: block;
    font-size: var(--font-small);
    color:  #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 0.5rem;
    position: relative;
    bottom: 25px;
`

export const FormButton = styled.button`
    width: ${props => props.buttonWidth};
    height: 40px;
    font-size: var(--font-medium);
    font-weight: bold;
    background: #FFB900;
    cursor: pointer;
    border-radius: 1rem;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const BottomText = styled.p`
    margin: 2rem auto 0 auto;
    text-align: center;
    
`
export const Link = styled.a `
    display: block;
    text-decoration: none;
    font-weight: bold;
    color: inherit;
`

