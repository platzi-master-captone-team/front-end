import React from 'react'
import { MainContent, Image, ImgWrapper  } from './LoginStyles';
import { LoginForm } from '../../components/Forms/Forms';

import img from '../../assets/images/login-image.png'

const RegisterExpert = () => {
    return ( 
        <MainContent>
            <LoginForm />
            <ImgWrapper>
                <Image src={img} />
            </ImgWrapper>
        </MainContent>
     );
}
 
export default RegisterExpert;