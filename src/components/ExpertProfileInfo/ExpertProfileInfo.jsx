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
    EducationInfo   } from './ExpertProfileInfoStyles'


const ExpertProfileInfo = ({
    name, 
    profession, 
    technologies,
    github,
    linkedin,
    resume,
    description, 
    experience,
    education,
    picture, 
    country, 
    city }) => {

    const avatarDefault = `https://ui-avatars.com/api/?name=${name}`
    const avatar = picture ? picture : avatarDefault
    
    return (
        <ProfileSection>
            <ProfileCard>
                <Avatar src={avatar} />
                <Name>{name}</Name>
                <Expertise>{profession}</Expertise>
                <Location>{city}, {country}</Location>
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
