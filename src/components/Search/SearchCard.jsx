import React from 'react'
import { Card, Avatar, Info, Name, Profession, Description, Division, Button } from './SearchComponentsStyles'

import DEFAULT_AVATAR from '../../assets/images/default-avatar.png'

const SearchResultCard = ( {name, profession, description, avatar = DEFAULT_AVATAR, id } ) => {
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
