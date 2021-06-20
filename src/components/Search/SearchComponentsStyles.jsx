import styled from 'styled-components';

// Search Bar 
export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 900px;
    height: 70px;
    border-radius: 15px;
    background-color: rgba(164, 164, 164, 0.17);
    margin: 0 auto;
    @media (max-width: 768px) {
        height: auto;
        padding: 1rem;
        justify-content: space-around;
    }
    `

export const List = styled.ul`
    width: 80%;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Item = styled.li`
  list-style-type: none;
`

export const Select = styled.select`
    background: none;
    border: none;
    font-weight: bold;
    padding: 1rem 0.5rem 1rem 0;
    cursor: pointer;
`
export const Option = styled.option`
`


// Search Results
export const SearchResultsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 900px;
    height: auto;
    margin: 2rem auto ;
    @media (max-width: 768px) {
        margin: 2rem ;
    }
`

// Search Card Result 
export const Card = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
    width: 200px;
    height: auto;
    border-radius: 15px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    margin-bottom: 1.5rem;
    @media (max-width: 768px) {
        flex-grow: 1;
        padding: 2rem 2.5rem;
        height: 400px;
        justify-content: space-around;
    }    
`
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: grey;
   @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }    
`

export const Info = styled.div`
    margin: 1rem 0;
`

export const Name = styled.h3`
    font-weight: bold;
    font-size: var(--font-medium);
    @media (max-width: 768px) {
        font-size: var(--font-large);
    }    
`
export const Speciality = styled.p`
    font-weight: medium;
    font-size: var(--font-small);
    color: #777777;
    line-height: 15px;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
    }    
    `
export const Division = styled.hr`
    margin: 0.8rem 0;
    border: 0;
    height: 1px;
    background: #E8E8E8;
`
export const Description = styled.p`
    font-weight: normal;
    font-size: var(--font-small);
    line-height: 18px;
    @media (max-width: 768px) {
        font-size: var(--font-medium);
    }    
`
export const Button = styled.a`
    display: inline-block;
    font-weight: bold;
    background: var(--color-primary);
    padding: 0.5rem 2rem;
    border-radius: 15px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    text-align: center;

`
// Pagination
export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 900px;
    margin: 0 auto 3rem;
`
export const PaginationLink = styled.a`
    background: ${(props) => 
        props.active === true && "var(--color-primary)"
    };
    padding: 7px 5px;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    text-align: center;
    margin-right: 5px;
    cursor: pointer;
`

