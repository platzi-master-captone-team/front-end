import React, { useState } from 'react'
import { FormContainer, Title, TextIndicator, SocialButtons, SocialButton, SocialButtonImg, Inputs, InputContainer, InputLabel, Input, FormButton, Select, Option } from './FormsStyles';

import logoGoogle from "../../assets/images/google-logo.svg"  
import logoLinkedIn from "../../assets/images/linkedin-logo.svg"  
import logoTwitter from "../../assets/images/twitter-logo.svg"  


import COUNTRIES from './countries.json'  
import TIME_ZONES from './timezones.json'  

export const RegisterExpertForm = () => {

    const [countries] = useState(COUNTRIES)
    const [timezones] = useState(TIME_ZONES)

    return ( 
        <FormContainer action="" formWidth={`662px`} maxWidth={"662px"} formPadding={"4rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Regístrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoGoogle}/>Regístrate con Google</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoLinkedIn}/>Regístrate con LinkedIn</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoTwitter}/>Regístrate con Twitter</SocialButton>
            </SocialButtons>
            <TextIndicator>O llena el siguiente formulario</TextIndicator>
            <Inputs>
                <InputContainer>
                    <InputLabel>Nombre</InputLabel>
                    <Input type="text" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Apellido</InputLabel>
                    <Input type="text" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>País</InputLabel>
                    <Select>
                        <Option>Selecciona un país</Option>
                        {countries.map(country => (
                            <Option key={country.code} value={country.name}>{country.name}</Option>
                        ))}
                    </Select>
                </InputContainer>
                <InputContainer>
                    <InputLabel>Zona Horaria</InputLabel>
                    <Select>
                        <Option>Selecciona una zona horaria</Option>
                        {timezones.map(time => (
                            <Option key={time.value} value={time.value}>{time.text}</Option>
                        ))}
                    </Select>
                </InputContainer>
                <InputContainer>
                    <InputLabel>Correo</InputLabel>
                    <Input type="email" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Teléfono</InputLabel>
                    <Input type="phone" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Clave de Identificación (RFC, RUT, RUC)</InputLabel>
                    <Input type="file" />
                </InputContainer>
                <FormButton buttonWidth={"312px"}>Registrarse</FormButton>

            </Inputs>

        </FormContainer>
     );
}

export const RegisterUserForm = () => {
    return ( 
        <FormContainer action="" formWidth={`662px`} maxWidth={"662px"} formPadding={"4.2rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Regístrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoGoogle}/>Regístrate con Google</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoLinkedIn}/>Regístrate con LinkedIn</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoTwitter}/>Regístrate con Twitter</SocialButton>
            </SocialButtons>
            <TextIndicator>O llena el siguiente formulario</TextIndicator>
            <Inputs>
                <InputContainer>
                    <InputLabel>Nombre</InputLabel>
                    <Input type="text" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Apellido</InputLabel>
                    <Input type="text" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>País</InputLabel>
                    <Input type="country" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Zona Horaria</InputLabel>
                    <Input type="time" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Correo</InputLabel>
                    <Input type="email" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Teléfono</InputLabel>
                    <Input type="phone" />
                </InputContainer>
                <FormButton buttonWidth={"312px"}>Registrarse</FormButton>

            </Inputs>

        </FormContainer>
     );
}

export const LoginForm = () => {
    return ( 
        <FormContainer action="" formWidth={`420px`} maxWidth={"420px"} formPadding={"4rem"}>
            <Title>Login</Title>
            <TextIndicator>Ingresa con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"column"} >
                <SocialButton marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoGoogle}/>Regístrate con Google</SocialButton>
                <SocialButton marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoLinkedIn}/>Regístrate con LinkedIn</SocialButton>
                <SocialButton marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoTwitter}/>Regístrate con Twitter</SocialButton>
            </SocialButtons>
            <TextIndicator>O ingresa con tu correo</TextIndicator>
            <Inputs>
                <InputContainer>
                    <InputLabel>Usuario</InputLabel>
                    <Input type="text" />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Contraseña</InputLabel>
                    <Input type="password" />
                </InputContainer>
                
                <FormButton buttonWidth={"100%"}>Ingresar</FormButton>

            </Inputs>

        </FormContainer>
     );
}
 
