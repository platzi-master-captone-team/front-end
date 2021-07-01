import styled from "styled-components";

export const FormContainer = styled.form`
    display: ${props => props.$show === props.profile ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const InputContainer = styled.div`
    width: 100%;
    padding: 0.5rem;
    display: ${props => props.$show === props.id ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
`
export const CheckboxContainer = styled.div` 
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 0.5rem 0.5rem;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    flex-wrap: wrap;
`

export const CheckboxLabel = styled.label`
    margin-right: 0.6rem;
    font-size: var(--font-medium);
    text-align: center;
`
export const Checkbox = styled.input`
    border: 2px solid black;
    margin: 0 0.3rem;
`

export const InputLabel = styled.label`
    display: inline-block;
    width: 100%;
    font-weight: bold;
    font-size: var(--font-medium);
    margin-bottom: 0.5rem;
    text-align: ${props => props.position === 'center' ? 'center' : 'left'};
`


export const Input = styled.input`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 1rem;
    border: 1px solid black;
    background: lightgrey;
    opacity: 0.8;
    padding: 0.8rem;
    font-size: var(--font-medium);
    outline: none;
    color: black;

    &:focus {
        border: 2px solid black;
    }

`
export const MultiSelect = styled.input`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 1rem;
    border: 1px solid black;
    background: lightgrey;
    opacity: 0.8;
    padding: 0.8rem;
    font-size: var(--font-medium);
    outline: none;
    color: black;

    &:focus {
        border: 2px solid black;
    }

`

export const FormButton = styled.button`
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: var(--font-medium);
    width: 100%;
    max-width: 400px;
    color: black;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-primary);
    border-radius: 15px;
    text-decoration: none;
    margin-right: 1rem;
`

export const SelectOption = styled.option`
    border-radius: 1rem;
`