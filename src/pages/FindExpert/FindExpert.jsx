import React from 'react'
import { MainContainer } from './FindExpertStyles'
import FindExpertProfile from '../../components/FindExpert/FindExpertProfile'
import FindExpertAgenda from '../../components/FindExpert/FindExpertAgenda'

const Profile = () => {
    return (
        <MainContainer>
            <FindExpertProfile />
            <FindExpertAgenda />
        </MainContainer>
    )
}

export default Profile
