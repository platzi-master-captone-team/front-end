import React from 'react'
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
    EducationInfo   } from './ProfileExpertStyles'

import DEFAULT_AVATAR from '../../assets/images/default-avatar.png'

const ProfileExpert = ({
    name = "María Herrera", 
    description = "Lorem excepteur cillum amet officia nostrud. Ea aute sunt tempor cillum cupidatat aliquip fugiat ipsum anim pariatur id consectetur fugiat. Sit excepteur velit irure voluptate mollit fugiat duis anim pariatur minim laborum aute. Esse consectetur irure ex dolore proident enim laborum aliquip proident ullamco esse. Dolore sit nulla in sint mollit voluptate esse anim mollit reprehenderit laboris non.", 
    expertise= "Project Manager", 
    location= "Bogotá, Col. UTC-5 America/Bogota", 
    avatar = DEFAULT_AVATAR  }) => {
    return (
        <ProfileSection>
            <ProfileCard>
                <Avatar src={avatar} />
                <Name>{name}</Name>
                <Expertise>{expertise}</Expertise>
                <Location>{location}</Location>
                <Social>
                    <SocialButton value={"github"}>Github</SocialButton>
                    <SocialButton value={"linkedin"}>LinkedIn</SocialButton>
                    <SocialButton value={"curriculum"}>Currículo</SocialButton>
                </Social>
                <Skills>
                    <SkillTag>UX Research</SkillTag>
                    <SkillTag>CX Strategy</SkillTag>
                    <SkillTag>Project Management</SkillTag>
                </Skills>
                <Division />
                <Description>{description}</Description>
            </ProfileCard>
            <ExperienceCard>
                <ExperienceTitle>Experiencia</ExperienceTitle>
                <Division />
                <ExperienceInfo>{description}</ExperienceInfo>
            </ExperienceCard>
            <EducationCard>
                <EducationTitle>Educación</EducationTitle>
                <Division />
                <EducationInfo>{description}</EducationInfo>
            </EducationCard>
        </ProfileSection>
    )
}

export default ProfileExpert
