import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { SearchResultsContainer, StyledPaginateContainer, SearchBarContainer, List, Item, Select, Option } from './SearchComponentsStyles.jsx'
import SearchCard from './SearchCard'
import JsonData from "../../assets/json/MOCK_DATA.json"

const SearchResults = () => {
    const [experts, setExperts] = useState(JsonData)
    const [sortType, setSortType] = useState('frontend')

    useEffect(() => {
        const sortArray = type => {
            const types = {
                frontend: 'frontend',
                backend: 'backend',
                data: 'data',
                highprice: 'highprice',
                lowprice: 'lowprice',
                react: 'react',
                vue: 'vue',
                angular: 'angular',
                node: 'node',
                php: 'php',
                django: 'django',
                rails: 'rails',
                python: 'python',
                r: 'r',
                scala: 'scala',
            }
            const sortProperty = types[type]
            const sorted = [...JsonData].sort((a, b) => {
                switch(sortProperty) {
                    case 'frontend':
                        return b.mastery.localeCompare(a.mastery)
                    case 'backend':
                        return a.mastery.localeCompare(b.mastery)
                    case 'data':
                        return b.mastery.localeCompare(a.mastery)
                    case 'react':
                        return b.technologies.localeCompare(a.technologies)
                    case 'vue':
                        return a.technologies.localeCompare(b.technologies)
                    case 'angular':
                        return b.technologies.localeCompare(a.technologies)
                    case 'node':
                        return a.technologies.localeCompare(b.technologies)
                    case 'php':
                        return b.technologies.localeCompare(a.technologies)
                    case 'django':
                        return a.technologies.localeCompare(b.technologies)
                    case 'rails':
                        return b.technologies.localeCompare(a.technologies)
                    case 'python':
                        return a.technologies.localeCompare(b.technologies)
                    case 'r':
                        return b.technologies.localeCompare(a.technologies)
                    case 'scala':
                        return a.technologies.localeCompare(b.technologies)
                    case 'lowprice':
                        return a['fee'] - b['fee']
                    case 'highprice':
                        return b['fee'] - a['fee']
                    default:
                        return 0
                }
            })
            setExperts(sorted)
        }
        sortArray(sortType)
    }, [sortType])


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
            <SearchCard key={expert.id} id={expert.id} name={expert.name} profession={expert.profession}  description={expert.description.slice(0, 150)} picture={expert.avatar} fee={expert.fee} />  
        )

    const pageCount = Math.ceil(experts.length / expertsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
        
    return (
    <>
        <SearchBarContainer>
            <List>
                <Item>
                    <Select onChange={e => setSortType(e.target.value)}>
                        <Option>Especialidad</Option>
                        <Option value="frontend">Frontend</Option>
                        <Option value="backend">Backend</Option>
                        <Option value="data">Data Science</Option>
                    </Select>
                </Item>
                <Item>
                    <Select onChange={e => setSortType(e.target.value)}>
                        <Option>Tecnología</Option>
                        <Option value="react">React</Option>
                        <Option value="vue">Vue</Option>
                        <Option value="angular">Angular</Option>
                        <Option value="node">Node</Option>
                        <Option value="php">PHP</Option>
                        <Option value="django">Django</Option>
                        <Option value="rails">Rails</Option>
                        <Option value="python">Python</Option>
                        <Option value="r">R</Option>
                        <Option value="scala">Scala</Option>
                    </Select>
                </Item>
                <Item>
                    <Select onChange={e => setSortType(e.target.value)}>
                        <Option>Precio</Option>
                        <Option value="lowprice">Menor Precio</Option>
                        <Option value="highprice">Mayor Precio</Option>
                    </Select>
                </Item>
            </List>  
        </SearchBarContainer>
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
    </>
    )
}

export default SearchResults
