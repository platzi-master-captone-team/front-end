import { FormContainer, FormButton, InputContainer, InputLabel, Input, SelectOption } from './FormPersonal.styles';

const FormPersonal = () => {
    return(
        <FormContainer>
            <InputContainer>
                <InputLabel>Nombre(s)</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Apellidos</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel>País</InputLabel>
                <Input as='select'>
                    <SelectOption  value='#' > Selecciona tu país </SelectOption>
                    <SelectOption  value='México' > México </SelectOption>
                    <SelectOption  value='Ecuador' > Ecuador </SelectOption>
                    <SelectOption  value='-Colombia' > Colombia </SelectOption>
                </Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>Zona Horaria</InputLabel>
                <Input as='select'>
                    <SelectOption  value='#' > Selecciona tu zona horaria </SelectOption>
                    <SelectOption  value='-5' > GMT-5 </SelectOption>
                    <SelectOption  value='-6' > GMT-6 </SelectOption>
                    <SelectOption  value='-7' > GMT-7 </SelectOption>
                </Input>
            </InputContainer>
            <InputContainer>
                <InputLabel>Número Telefónico</InputLabel>
                <Input type="tel" />
            </InputContainer>
            <InputContainer>
                <InputLabel>Correo</InputLabel>
                <Input type="email" />
            </InputContainer>
            <FormButton>Actualizar Datos</FormButton>
        </FormContainer>
    )
}

export default FormPersonal;