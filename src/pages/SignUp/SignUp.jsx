import React from 'react'
import { MainContent, Image, ImgWrapper, SelectSection, Text, Link } from './SignUpStyles';

import img from '../../assets/images/sign-up-image.png'

const SignUp = () => {
    return ( 
        <MainContent>
            <ImgWrapper>
                <Image src={img} />
            </ImgWrapper>
            <SelectSection>
                <Text>Regístrate ahora para entrar en contacto con el Mejor Talento de la región</Text>
                <Link href='/registro/usuario'>Busco un Experto</Link>
                <Link href='/registro/experto'>Soy un Experto</Link>
            </SelectSection>
        </MainContent>
     );
}
 
export default SignUp;