import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { MainContainer } from './ProfileInfoStyles'
import ExpertProfileInfo from '../../components/ExpertProfileInfo/ExpertProfileInfo'
import ExpertProfileAgenda from '../../components/ExpertProfileInfo/ExpertProfileAgenda'
import JsonData from '../../assets/json/MOCK_DATA.json'

const ProfileInfo = () => {

    const { id } = useParams()

     const [json, setJson] = useState(JsonData)
     console.log(id)

        
        return (
            <MainContainer>
            {
                json.filter(item => item.id == id).map(profile => 
                    <>
                    <ExpertProfileInfo 
                        name={profile.name}
                        profession={profile.profession}
                        technologies={profile.technologies}
                        github={profile.github}
                        linkedin={profile.linkedin}
                        resume={profile.resume}
                        description={profile.description}
                        experience={profile.experience}
                        education={profile.education}
                        picture={profile.avatar}
                        country={profile.country}
                        city={profile.city}
                    />
            
                <ExpertProfileAgenda fee={profile.fee} name={profile.name} id={profile.id} />
            </>
                )

            }
        </MainContainer>
    )
}

export default ProfileInfo
