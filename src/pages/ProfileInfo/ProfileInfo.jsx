import React, { useState, useEffect } from 'react'
import { MainContainer } from './ProfileInfoStyles'
import ExpertProfileInfo from '../../components/ExpertProfileInfo/ExpertProfileInfo'
import ExpertProfileAgenda from '../../components/ExpertProfileInfo/ExpertProfileAgenda'

import JsonData from "../../assets/json/MOCK_DATA_SINGLE.json"

const ProfileInfo = () => {

    // const { id } = useParams()

     const [profile, setProfile] = useState(JsonData);


    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
    //         const profile = await data.json()
    //         setProfile(profile)
    //     }

    //     getData();
    // }, [id])

    return (
        <MainContainer>
            <ExpertProfileInfo 
            	name={profile[0].name}
            	profession={profile[0].profession}
            	location={profile[0].location}
            	technologies={profile[0].technologies}
            	github={profile[0].github}
            	linkedin={profile[0].linkedin}
            	resume={profile[0].resume}
            	description={profile[0].description}
            	experience={profile[0].experience}
            	education={profile[0].education}
                avatar={profile[0].avatar}
            />
            <ExpertProfileAgenda fee={profile[0].fee} />
        </MainContainer>
    )
}

export default ProfileInfo
