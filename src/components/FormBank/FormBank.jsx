import { FormContainer, FormButton, InputContainer, InputLabel, Input } from '../FormPersonal/FormPersonal.styles';
import { LoginContext } from '../../utils/loginStatus';
import { useContext } from "react";

const FormBank = () => {

    const { login } = useContext(LoginContext);

    return(
        <FormContainer profile="Expert" $show={login.role}>
            <InputContainer>
                <InputLabel>Institución Bancaria</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Cuenta CLABE / ID Bancario</InputLabel>
                <Input type="text" />
            </InputContainer>
            <FormButton>Actualizar Datos</FormButton>
        </FormContainer>
    )
}

export default FormBank;