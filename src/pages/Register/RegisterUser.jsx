import React from 'react'
import { MainContent, RegisterImage, ImgWrapper  } from './RegisterStyles';
import { RegisterUserForm } from '../../components/Forms/Forms';

import img from '../../assets/images/register-image.png'

const RegisterUser = () => {
    return ( 
        <MainContent>
            <ImgWrapper>
                <RegisterImage src={img}  />
            </ImgWrapper>
            <RegisterUserForm />
        </MainContent>
     );
}
 
export default RegisterUser;