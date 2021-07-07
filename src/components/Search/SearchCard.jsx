import React from 'react'
import { Card, Header, Avatar, Fee, Info, Name, Profession, Description, Division, Button, Expertise } from './SearchComponentsStyles'

const SearchResultCard = ( {name, fee, profession, description, picture, id, mastery, technologies } ) => {
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
                 <Expertise>{mastery.charAt(0).toUpperCase() + mastery.slice(1)} ➡ {technologies.charAt(0).toUpperCase() + technologies.slice(1)}</Expertise>
                 <Division />   
                 <Description>{description}</Description>
             </Info>
             <Button href={`/experto/${id}`}>Consultar</Button>   
        </Card>
    )
}

export default SearchResultCard
