import styled from "styled-components";


export const PaymentContainer = styled.main`
    max-width: 1366px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 3rem;
    justify-items: center;
    align-items: flex-start;
    margin:auto;
    
`
export const OrderSummary = styled.aside`
    display: flex;
    justify-content: center;
    
`
export const OrderCard = styled.section`
    background: lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    

`
export const OrderDetails = styled.table`

`
export const MakePayment = styled.section`
    padding: 1rem;
`

export const Title = styled.p`
    font-family: var(--font-secondary);
    font-weight: bold;
    font-size: var(--font-large);
    margin-bottom: 0.5rem;
`
export const Description = styled.p`
    margin-bottom: 2rem;
    font-size: var(--font-medium);
` 
export const PaymentMethod = styled.div`
    background: lightgrey;
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

export const RadioButton = styled.input`
    &[type="radio"]

    margin-right: 1rem;
`

export const InputLabel = styled.label`
    display: inline-block;
    width: 280px;
    font-weight: bold;
    font-size: var(--font-medium);
    margin-left: 1rem;
`

export const Separator = styled.div`
    height: 2px;
    background: grey;
    width: 80%;
`

