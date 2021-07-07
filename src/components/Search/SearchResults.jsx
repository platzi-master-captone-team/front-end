import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { SearchResultsContainer, StyledPaginateContainer, SearchBarContainer, List, Item, Select, Option } from './SearchComponentsStyles.jsx'
import SearchCard from './SearchCard'
import JsonData from "../../assets/json/MOCK_DATA.json"
import JsonCategories from "../../assets/json/categories.json"

const SearchResults = () => {
    const [allData, setAllData] = useState(JsonData)
    const [experts, setExperts] = useState(JsonData)
    const [categories, setCategories] = useState(JsonCategories)


    // Filters
    const [filterMastery, setfilterMastery] = useState()    
    const [filterTechnologies, setfilterTechnologies] = useState()
    const [sortPrice, setSortPrice] = useState()

    // Filter by Mastery
    useEffect(() => {
        const sortArray = type => {
            const types = {
                frontend: 'frontend',
                backend: 'backend',
                "data-science": 'data-science',
            }
            const sortProperty = types[type]

            const filter = [...allData].filter(data => {
                if(filterTechnologies && filterMastery ) {
                    let doubleFilter = data.mastery === filterMastery && data.technologies === filterTechnologies
                    return doubleFilter
                } else if(filterMastery) {
                    return data.mastery === filterMastery
                } if(filterTechnologies) {
                    return data.technologies === filterTechnologies
                } else {
                    return data.mastery
                }
            })
            const sortedList = [...filter].sort((a, b) => {
                switch(sortPrice) {
                    case 'lowprice':
                        return a['fee'] - b['fee']
                    case 'highprice':
                        return b['fee'] - a['fee']
                    default:
                        return 0
                }
            })
            setExperts(sortedList)
        }
        sortArray(filterMastery, filterTechnologies, sortPrice)
    }, [filterMastery, filterTechnologies, sortPrice])

    // Filter by Technologies
    /* useEffect(() => {
        const sortArray = type => {
            const types = {
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

            const filter = [...JsonData].filter(data => {
                if(filterTechnologies && filterTechnologies === sortProperty ) {
                    return data.technologies === filterTechnologies
                } else {
                    return data.technologies
                }
            })
            setExperts(filter)
        }
        sortArray(filterTechnologies)
    }, [filterTechnologies]) */

    // Sort By Price
     /* useEffect(() => {
        const sortArray = type => {
            const types = {
                highprice: 'highprice',
                lowprice: 'lowprice',
            }
            const sortProperty = types[type]
            const sorted = [...experts].sort((a, b) => {
                switch(sortProperty) {
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
        sortArray(sortPrice)
    }, [sortPrice]) */


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
            <SearchCard key={expert.id} id={expert.id} name={expert.name} profession={expert.profession}  
            description={expert.description.slice(0, 153)+"..."} picture={expert.avatar} fee={expert.fee} 
            mastery={expert.mastery} technologies={expert.technologies}/>  
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
                    <Select onChange={e => setfilterMastery(e.target.value)}>
                        <Option value="">Especialidad</Option>
                        {
                            categories[0].masteries.map(mastery => 
                                <Option>{mastery}</Option>
                            )
                        }
                    </Select>
                </Item>
                <Item>
                    <Select onChange={e => setfilterTechnologies(e.target.value)}>
                        <Option value="">Tecnologías</Option>
                        {   
                            filterMastery ?
                                categories[1].technologies[filterMastery].map(technology => 
                                    <Option>{technology}</Option>
                            ) : categories[0].technologies.map(technology => 
                                <Option>{technology}</Option>
                            )
                        }
                    </Select>
                </Item>
                <Item>
                    <Select onChange={e => setSortPrice(e.target.value)}>
                        <Option value="">Precio</Option>
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
