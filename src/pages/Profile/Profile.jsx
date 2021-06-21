import React from 'react'
import { MainContainer } from './ProfileStyles'
import ProfileExpert from '../../components/Profile/ProfileExpert'
import ProfileAgenda from '../../components/Profile/ProfileAgenda'

const Profile = () => {
    return (
        <MainContainer>
            <ProfileExpert />
            <ProfileAgenda />
        </MainContainer>
    )
}

export default Profile
