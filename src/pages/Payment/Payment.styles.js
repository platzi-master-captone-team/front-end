import styled from "styled-components";


export const PaymentContainer = styled.main`
    max-width: 1366px;
    display: grid;
    grid-template-areas:
        "payment summary";
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 3rem;
    justify-items: center;
    align-items: flex-start;
    margin:auto;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        justify-items: center;
        grid-template-areas:
        "summary"
        "payment";
        padding: 1.5rem 0.5rem;
    }
`
export const OrderSummary = styled.aside`
    display: flex;
    justify-content: center;
    grid-area: summary;
    
`
export const OrderCard = styled.section`
    background: var(--color-lightgrey);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 760px) {
        padding: 0.5rem 0;
        font-size: var(--font-medium);
    }    

`
export const OrderDetails = styled.table`

`
export const MakePayment = styled.section`
    padding: 1rem;
    max-width: 340px;
    grid-area: payment;
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

export const PaymentCardForm = styled.div`
    background: var(--color-lightgrey);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    width: 100%;
    display:flex;
    align-items: center;
    max-width: 340px;
`

