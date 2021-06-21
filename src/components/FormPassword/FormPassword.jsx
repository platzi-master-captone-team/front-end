import { FormContainer, FormButton, InputContainer, InputLabel, Input } from '../FormPersonal/FormPersonal.styles';

const FormPassword = () => {
    return(
        <FormContainer>
            <InputContainer>
                <InputLabel>Contraseña Actual</InputLabel>
                <Input type="password" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Contraseña Nueva</InputLabel>
                <Input type="password" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Confirmar Contraseña</InputLabel>
                <Input type="password" />
            </InputContainer>
            <FormButton>Cambiar Contraseña</FormButton>
        </FormContainer>
    )
}

export default FormPassword;