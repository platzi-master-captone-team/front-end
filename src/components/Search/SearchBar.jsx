import React from 'react'
import { SearchBarContainer, List, Item, Select, Option } from './SearchComponentsStyles'

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <List>
                <Item>
                    <Select>
                        <Option selected disabled>Especialidad</Option>
                    </Select>
                </Item>
                <Item>
                    <Select>
                        <Option>Tecnología</Option>
                    </Select>
                </Item>
                <Item>
                    <Select>
                        <Option>Precio</Option>
                    </Select>
                </Item>
                <Item>
                    <Select>
                        <Option>Ordenar Por...</Option>
                    </Select>
                </Item>
            </List>  
        </SearchBarContainer>
    )
}

export default SearchBar
