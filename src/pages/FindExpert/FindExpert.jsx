import React, { useState, useEffect } from 'react'
import { MainContainer, SearchBar, List, Item } from './FindExpertStyles'

const list = {
    "categories":[
        {"frontend":["react", "vue"]}, 
        {"backend":["react", "vue"]}
    ]
}


const FindExpert = () => {
    const [categories, setCategories] = useState({})
    useEffect(() => {
        setCategories(list.categories)
        console.log(list.categories)
    }, [])
    return (
        <MainContainer>
            <SearchBar>
                <List>
                    <Item>1</Item>
                </List>
            </SearchBar>
        </MainContainer>
    )
}

export default FindExpert;
