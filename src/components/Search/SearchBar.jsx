import React from 'react'
import { SearchBarContainer, List, Item, Select, Option } from './SearchComponentsStyles'

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <List>
                <Item>
                    <Select>
                        <Option>Especialidad</Option>
                        <Option >Frontend</Option>
                        <Option >Backend</Option>
                        <Option >Data Science</Option>
                    </Select>
                </Item>
                <Item>
                    <Select>
                        <Option>Tecnología</Option>
                        <Option>Node</Option>
                        <Option>PHP</Option>
                        <Option>Django</Option>
                        <Option>Rails</Option>
                        <Option>Python</Option>
                        <Option>R</Option>
                        <Option>Scala</Option>
                    </Select>
                </Item>
                <Item>
                    <Select>
                        <Option>Precio</Option>
                        <Option>Menor Precio</Option>
                        <Option>Mayor Precio</Option>
                    </Select>
                </Item>
            </List>  
        </SearchBarContainer>
    )
}

export default SearchBar
