import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { 
    ProfileSection, 
    ProfileCard, 
    Avatar, 
    Name, 
    Expertise, 
    Location, 
    Social, 
    SocialButton, 
    Skills, 
    SkillTag, 
    Division, 
    Description, 
    ExperienceCard, 
    ExperienceTitle, 
    ExperienceInfo, 
    EducationCard, 
    EducationTitle, 
    EducationInfo   } from './ExpertProfileInfoStyles'

import DEFAULT_AVATAR from '../../assets/images/default-avatar.png'

const ExpertProfileInfo = ({
    name, 
    profession, 
    technologies,
    location, 
    github,
    linkedin,
    resume,
    description, 
    experience,
    education,

    avatar = DEFAULT_AVATAR}) => {

    
    return (
        <ProfileSection>
            <ProfileCard>
                <Avatar src={avatar} />
                <Name>{name}</Name>
                <Expertise>{profession}</Expertise>
                <Location>{location}</Location>
                <Social>
                    <SocialButton value={"github"} href={github} target="_blank">Github</SocialButton>
                    <SocialButton value={"linkedin"} href={linkedin} target="_blank">LinkedIn</SocialButton>
                    <SocialButton value={"curriculum"} href={resume} target="_blank">Currículo</SocialButton>
                </Social>
                <Skills>
                    <SkillTag>{technologies}</SkillTag>
                    <SkillTag>CX Strategy</SkillTag>
                    <SkillTag>Project Management</SkillTag>
                </Skills>
                <Division />
                <Description>{description}</Description>
            </ProfileCard>
            <ExperienceCard>
                <ExperienceTitle>Experiencia</ExperienceTitle>
                <Division />
                <ExperienceInfo>{experience}</ExperienceInfo>
            </ExperienceCard>
            <EducationCard>
                <EducationTitle>Educación</EducationTitle>
                <Division />
                <EducationInfo>{education}</EducationInfo>
            </EducationCard>
        </ProfileSection>
    )
}

export default ExpertProfileInfo
