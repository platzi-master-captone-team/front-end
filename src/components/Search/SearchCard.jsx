import React from 'react'
import { Card, Avatar, Info, Name, Profession, Description, Division, Button } from './SearchComponentsStyles'

const SearchResultCard = ( {name, profession, description, picture, id } ) => {
    const DEFAULT_AVATAR = `https://ui-avatars.com/api/?name=${name}`
    const avatar = picture ? picture : DEFAULT_AVATAR
    return (
        <Card id={id}>
            <Avatar src={avatar} />
             <Info>
                 <Name>{name}</Name>
                 <Profession>{profession}</Profession>    
                 <Division />   
                 <Description>{description}</Description>
             </Info>
             <Button href={`/experto/${id}`}>Consultar</Button>   
        </Card>
    )
}

export default SearchResultCard
