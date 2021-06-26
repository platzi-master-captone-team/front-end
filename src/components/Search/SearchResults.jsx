import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { SearchResultsContainer, StyledPaginateContainer } from './SearchComponentsStyles.jsx'
import SearchCard from './SearchCard'
import JsonData from "../../assets/json/MOCK_DATA.json"

const SearchResults = () => {
    const [experts, setExperts] = useState(JsonData)

    // useEffect(() => {
    //     getData()
    // }, [])
    
    // const getData = async () => {
    //     const data = await fetch()
    //     const expertsData = await data.json()
    //     setExperts(expertsData)
    // }

    const [pageNumber, setPageNumber]  = useState(0)

    const expertsPerPage = 12
    const pageVisited =  pageNumber * expertsPerPage 

    const displayExperts = experts
        .slice(pageVisited, pageVisited + expertsPerPage)
        .map((expert) => 
            <SearchCard id={expert.id} name={expert.name} profession={expert.profession} description={expert.description.slice(0, 150)} avatar={expert.avatar} />  
        )

    const pageCount = Math.ceil(experts.length / expertsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
        
    return (
    <SearchResultsContainer>
        {displayExperts}
        <StyledPaginateContainer>
            <ReactPaginate 
             previousLabel="&lsaquo;"
             nextLabel="&rsaquo;"
             pageCount={pageCount}
             onPageChange={changePage}
             containerClassName={"paginationBttns"}
             previousLinkClassName={"previousBttn"}
             nextLinkClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName="paginationActive"
            />
        </StyledPaginateContainer>
    </SearchResultsContainer>
    )
}

export default SearchResults
