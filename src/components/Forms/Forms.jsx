import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { 
    FormContainer, 
    Title, TextIndicator, 
    SocialButtons, 
    SocialButton, 
    SocialButtonImg, 
    Inputs, 
    InputContainer, 
    InputLabel, 
    Input, 
    FormButton, 
    Select, 
    Option,
    Error
 } from './FormsStyles';

import logoGoogle from "../../assets/images/google-logo.svg"  
import logoLinkedIn from "../../assets/images/linkedin-logo.svg"  
import logoTwitter from "../../assets/images/twitter-logo.svg"  


import COUNTRIES from './countries.json'  
import TIME_ZONES from './timezones.json'  



export const RegisterExpertForm = () => {

    const [countries] = useState(COUNTRIES)
    const [timezones] = useState(TIME_ZONES)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} formWidth={`662px`} maxWidth={"662px"} formPadding={"4rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Regístrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoGoogle} />Regístrate con Google</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoLinkedIn} />Regístrate con LinkedIn</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoTwitter} />Regístrate con Twitter</SocialButton>
            </SocialButtons>
            <TextIndicator>O llena el siguiente formulario</TextIndicator>
            <Inputs>
                <InputContainer>
                    <InputLabel>Nombre</InputLabel>
                    <Input
                        type="text"
                        name="firstname"
                        {...register("firstname", {
                            required: { value: true }
                        })}
                    />
                    {errors.firstname && <Error>El nombre es requerido</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Apellido</InputLabel>
                    <Input
                        type="text"
                        name="lastname"
                        {...register("lastname", {
                            required: { value: true }
                        })}
                    />
                    {errors.lastname && <Error>El apellido es requerido</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>País</InputLabel>
                    <Select
                        name="country"
                        {...register("country", {
                            required: { value: true }
                        })}
                    >
                        <Option value="">Selecciona una opción</Option>
                        {countries.map(country => (
                            <Option key={country.code} value={country.name}>{country.name}</Option>
                        ))}
                    </Select>
                    {errors.country && <Error>Selecciona una país</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Zona Horaria</InputLabel>
                    <Select
                        name="timezone"
                        {...register("timezone", {
                            required: { value: true }
                        })}
                    >
                        <Option value="">Selecciona una zona horaria</Option>
                        {timezones.map(timezone => (
                            <Option key={timezone.value} value={timezone.value}>{timezone.text}</Option>
                        ))}
                    </Select>
                    {errors.timezone && <Error>Selecciona una zona horaria</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Correo</InputLabel>
                    <Input
                        type="email"
                        name="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "El email es requerido"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Ingresa un correo válido"
                            }
                        })}
                    />
                    {errors.email && (<Error>{errors.email.message}</Error>)}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Teléfono</InputLabel>
                    <Input
                        type="phone"
                        name="phone"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "Ingresa un número telefónico"
                            },
                            pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                                message: "Ingresa un número telefónico válido"
                            }
                        })}
                    />
                    {errors.phone && (<Error>{errors.phone.message}</Error>)}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Contraseña</InputLabel>
                    <Input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: { 
                                value: true,
                                message: "Ingresa una contraseña"
                            },
                            minLength: { 
                                value: 8, 
                                message: 'Muy corta' 
                            }
                        })}
                    />
                    {errors.password && <Error>{errors.password.message}</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Confirmar Contraseña</InputLabel>
                    <Input
                        type="password"
                        name="confirm"
                        {...register("confirm", {
                            validate: value => {
                                if (value === getValues('password')) { return true } else { return "Las contraseñas no coinciden" }
                            },
                            required: { 
                                value: true,
                                message: "Ingresa una contraseña"
                            },
                            minLength: { 
                                value: 8, 
                                message: 'Muy corta' 
                            }
                        })}
                    />
                    {errors.confirm && <Error>{errors.confirm.message}</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Clave de Identificación (RFC, RUT, RUC)</InputLabel>
                    <Input type="file" name="file"
                        {...register("file", {
                            required: { value: true },
                        })}
                    />
                    {errors.file && <Error>Selecciona un archivo</Error>}
                </InputContainer>
                <FormButton type="submit" buttonWidth={"312px"} >Registrarse</FormButton>

            </Inputs>

        </FormContainer>
    );
}

export const RegisterUserForm = () => {
    const [countries] = useState(COUNTRIES)
    const [timezones] = useState(TIME_ZONES)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)} formWidth={`662px`} maxWidth={"662px"} formPadding={"4rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Regístrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoGoogle} />Regístrate con Google</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoLinkedIn} />Regístrate con LinkedIn</SocialButton>
                <SocialButton buttonWidth={"172px"}><SocialButtonImg src={logoTwitter} />Regístrate con Twitter</SocialButton>
            </SocialButtons>
            <TextIndicator>O llena el siguiente formulario</TextIndicator>
            <Inputs>
                <InputContainer>
                    <InputLabel>Nombre</InputLabel>
                    <Input
                        type="text"
                        name="firstname"
                        {...register("firstname", {
                            required: { value: true }
                        })}
                    />
                    {errors.firstname && <Error>El nombre es requerido</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Apellido</InputLabel>
                    <Input
                        type="text"
                        name="lastname"
                        {...register("lastname", {
                            required: { value: true }
                        })}
                    />
                    {errors.lastname && <Error>El apellido es requerido</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>País</InputLabel>
                    <Select
                        name="country"
                        {...register("country", {
                            required: { value: true }
                        })}
                    >
                        <Option value="">Selecciona una opción</Option>
                        {countries.map(country => (
                            <Option key={country.code} value={country.name}>{country.name}</Option>
                        ))}
                    </Select>
                    {errors.country && <Error>Selecciona una país</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Zona Horaria</InputLabel>
                    <Select
                        name="timezone"
                        {...register("timezone", {
                            required: { value: true }
                        })}
                    >
                        <Option value="">Selecciona una zona horaria</Option>
                        {timezones.map(timezone => (
                            <Option key={timezone.value} value={timezone.value}>{timezone.text}</Option>
                        ))}
                    </Select>
                    {errors.timezone && <Error>Selecciona una zona horaria</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Correo</InputLabel>
                    <Input
                        type="email"
                        name="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "El email es requerido"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Ingresa un correo válido"
                            }
                        })}
                    />
                    {errors.email && (<Error>{errors.email.message}</Error>)}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Teléfono</InputLabel>
                    <Input
                        type="phone"
                        name="phone"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "Ingresa un número telefónico"
                            },
                            pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                                message: "Ingresa un número telefónico válido"
                            }
                        })}
                    />
                    {errors.phone && (<Error>{errors.phone.message}</Error>)}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Contraseña</InputLabel>
                    <Input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Ingresa una contraseña"
                            },
                            minLength: {
                                value: 8,
                                message: 'Muy corta'
                            }
                        })}
                    />
                    {errors.password && <Error>{errors.password.message}</Error>}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Confirmar Contraseña</InputLabel>
                    <Input
                        type="password"
                        name="confirm"
                        {...register("confirm", {
                            validate: value => {
                                if (value === getValues('password')) { return true } else { return "Las contraseñas no coinciden" }
                            },
                            required: {
                                value: true,
                                message: "Ingresa una contraseña"
                            },
                            minLength: {
                                value: 8,
                                message: 'Muy corta'
                            }
                        })}
                    />
                    {errors.confirm && <Error>{errors.confirm.message}</Error>}
                </InputContainer>
                <FormButton type="submit" buttonWidth={"312px"} >Registrarse</FormButton>
            </Inputs>
        </FormContainer>
    );
}

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
    }
    return ( 
        <FormContainer onSubmit={handleSubmit(onSubmit)} formWidth={`420px`} maxWidth={"420px"} formPadding={"4rem"}>
            <Title>Login</Title>
            <TextIndicator>Ingresa con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"column"} >
                <SocialButton marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoGoogle}/>Regístrate con Google</SocialButton>
                <SocialButton marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoLinkedIn}/>Regístrate con LinkedIn</SocialButton>
                <SocialButton marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoTwitter}/>Regístrate con Twitter</SocialButton>
            </SocialButtons>
            <TextIndicator>O ingresa con tu correo</TextIndicator>
            <Inputs>
                <Input
                    type="email"
                    name="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "El email es requerido"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Ingresa un correo válido"
                        }
                    })}
                />
                {errors.email && (<Error>{errors.email.message}</Error>)}
                <InputContainer>
                    <InputLabel>Contraseña</InputLabel>
                    <Input
                        type="password"
                        name="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Ingresa una contraseña"
                            }
                        })}
                    />
                    {errors.password && <Error>{errors.password.message}</Error>}
                </InputContainer>
                
                <FormButton type="submit" buttonWidth={"100%"}>Ingresar</FormButton>

            </Inputs>

        </FormContainer>
     );
}
 
