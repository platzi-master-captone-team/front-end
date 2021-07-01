import React from 'react'
import { Card, Header, Avatar, Fee, Info, Name, Profession, Description, Division, Button } from './SearchComponentsStyles'

const SearchResultCard = ( {name, fee, profession, description, picture, id } ) => {
    const DEFAULT_AVATAR = `https://ui-avatars.com/api/?name=${name}`
    const avatar = picture ? picture : DEFAULT_AVATAR
    return (
        <Card id={id}>
            <Header>
                <Avatar src={avatar} />
                <Fee>${fee}</Fee>
            </Header>
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
