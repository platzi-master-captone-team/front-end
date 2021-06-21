import React from 'react'
import { PaginationContainer, PaginationLink } from './SearchComponentsStyles'

const SearchPagination = () => {
    return (
        <PaginationContainer>
            <PaginationLink>&lsaquo;</PaginationLink>
            <PaginationLink  active={true}>1</PaginationLink>
            <PaginationLink>2</PaginationLink>
            <PaginationLink>3</PaginationLink>
            <PaginationLink >&rsaquo;</PaginationLink>
        </PaginationContainer>
    )
}

export default SearchPagination
