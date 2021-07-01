import styled from "styled-components";

export const PaymentMethod = styled.div`
    background: var(--color-lightgrey);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    width: 100%;
    display:flex;
    align-items: center;
    max-width: 340px;
`
export const PaymentButton = styled.button`
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: var(--font-large);
    width: 100%;
    color: white;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-tertiary);
    border-radius: 15px;
    text-decoration: none;
    align-self:right;
    max-width: 340px;
`

export const RadioButton = styled.input.attrs(props => ({
    checked: props.checked === props.value ? true : false}
))

`
    &[type="radio"]

    margin-right: 1rem;
`

export const RadioLabel = styled.label`
    display: inline-block;
    width: 280px;
    font-weight: bold;
    font-size: var(--font-medium);
    margin-left: 1rem;
`
export const CardExp = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    padding: 0.8rem;
    border-radius: 1rem;
    background: var(--color-lightgrey);
    font-family: var(--font-primary);
    margin-bottom: 0.5rem;


    &:focus {
        border: 2px solid black;
    }
`
export const CardInput = styled.input`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    padding: 0.8rem;
    border-radius: 1rem;
    background: var(--color-lightgrey);
    width: 100%;
    margin-bottom: 0.5rem;
    text-align: center;
    font-family: var(--font-primary);
    font-size: var(--font-medium);


    &:focus {
        border: 2px solid black;
    }
`

export const CardExpirationInput = styled.input.attrs(props => ({
    maxLength: props.maxLength || '2',
    size: props.size || '2',
  }))

`
    border: 0;
    opacity: 0.8;
    font-family: var(--font-primary);
    font-size: var(--font-medium);
    outline: none;
    color: black;
    background: var(--color-lightgrey);
    text-align: center;
`

export const EXPCVVContainer = styled.div`
    display: flex;
    justify-content: center;
` 
export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 1rem;
` 