import React from 'react'
import { MainContainer } from './ProfileInfoStyles'
import ExpertProfileInfo from '../../components/ExpertProfileInfo/ExpertProfileInfo'
import ExpertProfileAgenda from '../../components/ExpertProfileInfo/ExpertProfileAgenda'

const ProfileInfo = () => {
    return (
        <MainContainer>
            <ExpertProfileInfo />
            <ExpertProfileAgenda />
        </MainContainer>
    )
}

export default ProfileInfo
