import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-width: 1336px;
    margin: 0 auto;
`
export const SearchBar = styled.div`
    width: 80%;
    height: 81px;
    border-radius: 15px;
    background-color: rgba(164, 164, 164, 0.17);
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 800px;

`

export const Item = styled.li`
  padding: 0 8px;
`