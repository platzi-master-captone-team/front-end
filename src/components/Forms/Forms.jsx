import React from 'react'
import { FormContainer, Title, TextIndicator, SocialButtons, SocialButton, SocialButtonImg, Inputs, InputContainer, InputLabel, Input, FormButton } from './FormsStyles';

import logoGoogle from "../../assets/images/google-logo.svg"  
import logoLinkedIn from "../../assets/images/linkedin-logo.svg"  
import logoTwitter from "../../assets/images/twitter-logo.svg"  

export const RegisterExpertForm = () => {
    return ( 
        <FormContainer action="" formWidth={`662px`} formPadding={"4.2rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Registrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoGoogle}/>Registrate con Google</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoLinkedIn}/>Registrate con LinkedIn</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoTwitter}/>Registrate con Twitter</SocialButton>
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
        <FormContainer action="" formWidth={`662px`} formPadding={"4.2rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Registrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoGoogle}/>Registrate con Google</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoLinkedIn}/>Registrate con LinkedIn</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoTwitter}/>Registrate con Twitter</SocialButton>
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
        <FormContainer action="" formWidth={`400px`} formPadding={"6.8rem"}>
            <Title>Login</Title>
            <TextIndicator>Ingresa con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"column"} >
                <SocialButton marginBottom={"1.5rem"} buttonWidth={"100%"}><SocialButtonImg src={logoGoogle}/>Registrate con Google</SocialButton>
                <SocialButton marginBottom={"1.5rem"} buttonWidth={"100%"}><SocialButtonImg src={logoLinkedIn}/>Registrate con LinkedIn</SocialButton>
                <SocialButton marginBottom={"1.5rem"} buttonWidth={"100%"}><SocialButtonImg src={logoTwitter}/>Registrate con Twitter</SocialButton>
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
 
