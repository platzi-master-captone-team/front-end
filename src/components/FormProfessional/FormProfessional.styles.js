import styled from "styled-components";

export const FormContainer = styled.form`


`

export const InputContainer = styled.div`
    width: 300px;
`
export const InputLabel = styled.label`
    display: inline-block;
    width: 280px;
    font-weight: bold;
    font-size: var(--font-medium);
    margin-bottom: 0.5rem;
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

export const FormButton = styled.button`
    font-family: var(--font-primary);
    font-weight: bold;
    font-size: var(--font-medium);
    width: 100%;
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