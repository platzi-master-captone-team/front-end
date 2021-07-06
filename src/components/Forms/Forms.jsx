import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import { LoginContext } from '../../utils/loginStatus';
import axios from 'axios';
import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { 
    MainContainer,
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
    Error,
    BottomText,
    Link
 } from './FormsStyles';


import logoGoogle from "../../assets/images/google-logo.svg"  
import logoLinkedIn from "../../assets/images/linkedin-logo.svg"  
import logoTwitter from "../../assets/images/twitter-logo.svg"  


import COUNTRIES from '../../assets/json/countries.json'  

export const RegisterExpertForm = () => {

    const [countries] = useState(COUNTRIES)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const [userError, setUserError] = useState(null)

    const onSubmit = async (data, e) => {
        
            let object = {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                country_id: data.country_id,
                password: data.password,
                role_id: data.role_id
            }

          try {
          const response = await fetch("https://consultify.herokuapp.com/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
          })

          const data = await response.json()

            if (data.error) {
                setUserError(data.error)
            } else {
                window.location = "/login";
            }

          } catch (err) {
            console.error(err.message);
          }
    }

    return (
        <MainContainer Width={`662px`} Padding={"4rem"}>
            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <Title>Registrarse</Title>
                <TextIndicator>llena el siguiente formulario</TextIndicator>
                <Inputs>
                    <InputContainer>
                        <InputLabel>Nombre</InputLabel>
                        <Input
                            type="text"
                            name="name"
                            {...register("name", {
                                required: { value: true }
                            })}
                        />
                        {errors.firstname && <Error>El nombre es requerido</Error>}
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
                                },
                            })}
                        />
                        {errors.email && (<Error>{errors.email.message}</Error>)}
                        {userError && (<Error>El correo ya existe</Error>)}
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Teléfono</InputLabel>
                        <Input
                            type="phone"
                            name="phone_number"
                            {...register("phone_number", {
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
                        {errors.phone_number && (<Error>{errors.phone_number.message}</Error>)}
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>País</InputLabel>
                        <Select
                            name="country_id"
                            {...register("country_id", {
                                required: { value: true }
                            })}
                        >
                            <Option value="">Selecciona una opción</Option>
                            {countries.map(country => (                       
                                <Option key={country.id} value="1">{country.name}</Option>
                            ))}
                        </Select>
                        {errors.country_id && <Error>Selecciona una país</Error>}
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
                        <Input type="text" name="document"
                            {...register("document", {
                                required: {
                                    value: true,
                                    message: "Ingresa un número de registro"
                                },
                                pattern: {
                                    value: /^[A-Z0-9.-]/i,
                                    message: "Ingresa un número de registro válido"
                                },
                                minLength: { 
                                    value: 9, 
                                    message: 'El número de registro no es válido' 
                                },
                                maxLength: { 
                                    value: 13, 
                                    message: 'El número de registro no es válido' 
                                }
                            })}
                        />
                        {errors.document && <Error>{errors.document.message}</Error>}
                    </InputContainer>
                    <Input 
                        type="hidden" 
                        name="role_id" 
                        value="1"
                        {...register("role_id", {
                            required: { value: true },
                        })}
                    >
                    </Input>
                    <FormButton type="submit" buttonWidth={"312px"} >Registrarse</FormButton>
                </Inputs>
            </FormContainer>
        </MainContainer>
    );
}

export const RegisterUserForm = () => {
    const [countries] = useState(COUNTRIES)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();


    const responseSuccessGoogle = async (response) => {
        console.log(response)
        await axios({
            method: "GET",
            url: "https://consultify.herokuapp.com/api/user/auth/google",
        }).then(response => {
            if (response.request.status === 200) {
                window.location.href = response.request.responseURL                
            }
        })
    }
    const responseSuccessLinkedIn = async (response) => {
        console.log(response)
        await axios({
            method: "GET",
            url: "https://consultify.herokuapp.com/api/user/auth/linkedin",
        }).then(response => {
            if (response.request.status === 200) {
                window.location.href = response.request.responseURL                
            }
        })
    }
    

    const onSubmit = async (data, e) => {
        console.log(data)
        let object = {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                country_id: data.country_id,
                password: data.password,
                role_id: data.role_id
            }

          try {
          const response = await fetch("https://consultify.herokuapp.com/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
          });

          window.location = "/login";
        } catch (err) {
          console.error(err.message);
        }
    }

    return (
        <MainContainer  Width={`662px`} Padding={"4rem"}>
            <Title>Registrarse</Title>
            <TextIndicator>Regístrate con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"row"}>
                <SocialButton onClick={responseSuccessGoogle}buttonWidth={"250px"}><SocialButtonImg src={logoGoogle} />Regístrate con Google</SocialButton>
                <SocialButton onClick={responseSuccessLinkedIn}buttonWidth={"250px"}><SocialButtonImg src={logoLinkedIn} />Regístrate con LinkedIn</SocialButton>
            </SocialButtons>
            <TextIndicator>O llena el siguiente formulario</TextIndicator>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Inputs>
                    <InputContainer>
                        <InputLabel>Nombre</InputLabel>
                        <Input
                            type="text"
                            name="name"
                            {...register("name", {
                                required: { value: true }
                            })}
                        />
                        {errors.name && <Error>El nombre es requerido</Error>}
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
                            name="phone_number"
                            {...register("phone_number", {
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
                        {errors.phone_number && (<Error>{errors.phone_number.message}</Error>)}
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>País</InputLabel>
                        <Select
                            name="country_id"
                            {...register("country_id", {
                                required: { value: true }
                            })}
                        >
                            <Option value="">Selecciona una opción</Option>
                            {countries.map(country => (
                                <Option key={country.id} value="1">{country.name}</Option>
                            ))}
                        </Select>
                        {errors.country_id && <Error>Selecciona una país</Error>}
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
                    <Input 
                        type="hidden" 
                        name="role_id" 
                        value="2"
                        {...register("role_id", {
                            required: { value: true },
                        })}
                    >
                    </Input>
                    <FormButton type="submit" buttonWidth={"312px"} >Registrarse</FormButton>
                </Inputs>
            </FormContainer>
        </MainContainer>
    );
}

export const LoginForm = () => {

    let history = useHistory();
    const { login, setLogin } = useContext(LoginContext);
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userError, setUserError] = useState(null)

    const responseSuccessGoogle = async (response) => {
        console.log(response)
        await axios({
            method: "GET",
            url: "https://consultify.herokuapp.com/api/user/auth/google",
        }).then(response => {
            if (response.request.status === 200) {
                window.location.href = response.request.responseURL                
            }
        })
    }
    const responseSuccessLinkedIn = async (response) => {
        console.log(response)
        await axios({
            method: "GET",
            url: "https://consultify.herokuapp.com/api/user/auth/linkedin",
        }).then(response => {
            if (response.request.status === 200) {
                window.location.href = response.request.responseURL                
            }
        })
    }


    const onSubmit = async (data) => {
         let object = {
            email: data.email,
            password: data.password
        }

        
        await axios.post('https://consultify.herokuapp.com/api/user/login', object)
            .then(response => {
                // console.log("Status: ", response.status)
                // console.log("Data: ", response.data)
                cookie.set("token", response.data.token)
                const tokenData = jwt_decode(response.data.token);
                const userRole = tokenData.role_id === 1 ? 'Experto': 'Cliente';
                setLogin({...login, status:true, role: userRole, name:tokenData.name});
                history.push('/profile/dashboard')
            }).catch(error => {
                  console.log(error)
                  setUserError(error.response.data.error)
            })

    }

    


    return ( 
        <MainContainer Width={`420px`} Padding={"4rem"}>
            <Title>Login</Title>
            <TextIndicator>Ingresa con tus redes sociales</TextIndicator>
            <SocialButtons flexDirection={"column"} >
                <SocialButton href='http://consultify.herokuapp.com/api/user/auth/google' rel="noopener" rel="noreferrer" marginBottom={"1rem"} buttonWidth={"100%"}  ><SocialButtonImg src={logoGoogle}  />Ingresa con Google</SocialButton>
                <SocialButton href='http://consultify.herokuapp.com/api/user/auth/linkedin' rel="noopener" rel="noreferrer" marginBottom={"1rem"} buttonWidth={"100%"}><SocialButtonImg src={logoLinkedIn}/>Ingresa con LinkedIn</SocialButton>
            </SocialButtons>
            <TextIndicator>O ingresa con tu correo</TextIndicator>
            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <Inputs>
                {userError && (<Error>Correo o Contraseña no válidos</Error>)}
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
                
                    <FormButton type="submit" buttonWidth={"100%"}>Ingresar</FormButton>
                    
                    <BottomText>
                        ¿Aún no tienes una cuenta?
                        <Link href="/signup">Regístrate ahora</Link>
                    </BottomText>
                </Inputs>
            </FormContainer>


        </MainContainer>
     );
}
 
