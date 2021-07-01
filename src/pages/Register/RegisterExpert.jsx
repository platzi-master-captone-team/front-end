import React from 'react'
import { MainContent, RegisterImage, ImgWrapper  } from './RegisterStyles';
import { RegisterExpertForm } from '../../components/Forms/Forms';

import img from '../../assets/images/register-image.png'

const RegisterExpert = () => {
    return ( 
        <MainContent>
            <ImgWrapper>
                <RegisterImage src={img}  />
            </ImgWrapper>
            <RegisterExpertForm />
        </MainContent>
     );
}
 
export default RegisterExpert;