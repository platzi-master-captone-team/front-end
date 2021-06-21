import React from 'react'
import { Card, Avatar, Info, Name, Speciality, Description, Division, Button } from './SearchComponentsStyles'

import DEFAULT_AVATAR from '../../assets/images/default-avatar.png'

const SearchResultCard = ( {name, speciality, description, avatar = DEFAULT_AVATAR } ) => {
    return (
        <Card>
            <Avatar src={avatar} />
             <Info>
                 <Name>{name}</Name>
                 <Speciality>{speciality}</Speciality>    
                 <Division />   
                 <Description>{description}</Description>
             </Info>
             <Button href='/perfil'>Consultar</Button>   
        </Card>
    )
}

export default SearchResultCard
