import React from 'react'
import { MainContainer } from './FindExpertStyles'
import FindExpertProfile from '../../components/FindExpert/FindExpertProfile'
import FindExpertAgenda from '../../components/FindExpert/FindExpertAgenda'

const FindExpert = () => {
    return (
        <MainContainer>
            <FindExpertProfile />
            <FindExpertAgenda />
        </MainContainer>
    )
}

export default FindExpert;
