import React from 'react'
import { MainContainer } from './SearchStyles'
import SearchBar from '../../components/Search/SearchBar'
import SearchResults from '../../components/Search/SearchResults'


const Search = () => {
    return (
        <MainContainer>
            <SearchBar />
            <SearchResults />
        </MainContainer>
    )
}

export default Search
