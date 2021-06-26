import React, { useState, useEffect } from 'react'
import { MainContainer } from './SearchStyles'
import SearchBar from '../../components/Search/SearchBar'
import SearchResults from '../../components/Search/SearchResults'
import SearchPagination from '../../components/Search/SearchPagination'

const list = {
    "categories":[
        {"frontend":["react", "vue"]}, 
        {"backend":["react", "vue"]}
    ]
}


const Search = () => {
    const [categories, setCategories] = useState({})
    useEffect(() => {
        setCategories(list.categories)
        console.log(list.categories)
    }, [])
    return (
        <MainContainer>
            <SearchBar />
            <SearchResults />
        </MainContainer>
    )
}

export default Search
