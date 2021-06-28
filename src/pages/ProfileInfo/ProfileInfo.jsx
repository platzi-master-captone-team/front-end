import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { MainContainer } from './ProfileInfoStyles'
import ExpertProfileInfo from '../../components/ExpertProfileInfo/ExpertProfileInfo'
import ExpertProfileAgenda from '../../components/ExpertProfileInfo/ExpertProfileAgenda'

const ProfileInfo = () => {

    const { id } = useParams()

    console.log(id)

     const [profile, setProfile] = useState([]);

     useEffect(() => {
         const getData = async () => {
             const data = await fetch(`https://consultify.herokuapp.com/api/user/${id}/detail`)
             const profileResponse = await data.json()
             console.log(profileResponse)
             setProfile(profileResponse)
            }
            
            getData();
        }, [id])
        
        return (
            <MainContainer>
            <ExpertProfileInfo 
            	name={profile.name}
            	profession={profile.profession}
            	location={profile.location}
            	technologies={profile.technologies}
            	github={profile.github}
            	linkedin={profile.linkedin}
            	resume={profile.resume}
            	description={profile.description}
            	experience={profile.experience}
            	education={profile.education}
                avatar={profile.avatar}
            />
            <ExpertProfileAgenda fee={profile.fee} />
        </MainContainer>
    )
}

export default ProfileInfo
