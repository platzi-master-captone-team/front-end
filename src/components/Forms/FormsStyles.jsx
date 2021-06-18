import styled from 'styled-components'

export const FormContainer = styled.form`
    width: ${props => props.formWidth};
    max-width: 662px;
    padding: ${props => props.formPadding};
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-family: "Karla", sans-serif;

`
export const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 2.2rem;
`

export const TextIndicator = styled.p`
    font-size: 1.6rem;
`

export const SocialButtons = styled.div`
    margin: 3rem 0;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content: space-between;

`
export const SocialButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.buttonWidth};
    height: 40px;
    border: 0.8px solid #F0F0F0;
    border-radius: 1.2rem;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: ${props => props.marginBottom};
    cursor: pointer;
    
`
export const SocialButtonImg = styled.img`
    width: 1.5rem;
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
    width: 280px;
`
export const InputLabel = styled.label`
    display: inline-block;
    width: 280px;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1.6rem;
`

export const Input = styled.input`
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 1.2rem;
    border: none;
    background: #F5F5F5;
    padding: 1rem;

`

export const FormButton = styled.button`
    width: ${props => props.buttonWidth};
    height: 40px;
    font-size: 1.5rem;
    font-weight: bold;
    background: #FFB900;
    cursor: pointer;
    border-radius: 1.2rem;
    margin: 0 auto;

`
