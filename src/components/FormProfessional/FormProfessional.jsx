import { FormContainer, CheckboxContainer, CheckboxLabel, Checkbox, FormButton, InputContainer, InputLabel, Input } from '../FormPersonal/FormPersonal.styles';

const FormProfessional = () => {
    return(
        <FormContainer>
            <InputContainer>
                <InputLabel>Área de Experiencia</InputLabel>
                <CheckboxContainer>
                    <Checkbox type='checkbox' value="Frontend"/> 
                    <CheckboxLabel>Frontend</CheckboxLabel>
                </CheckboxContainer>
                <CheckboxContainer>
                    <Checkbox type='checkbox' value="Backend"/> 
                    <CheckboxLabel>Backend</CheckboxLabel>
                </CheckboxContainer>
                <CheckboxContainer>
                    <Checkbox type='checkbox' value="Data Science"/> 
                    <CheckboxLabel>Data Science</CheckboxLabel>
                </CheckboxContainer>
            </InputContainer>
            <InputContainer>
                <InputLabel>Tecnologías que domina</InputLabel>
                <CheckboxContainer direction="column">
                    <InputLabel>Frontend</InputLabel><br/>
                    <CheckboxContainer>
                        <Checkbox type='checkbox' value="React"/> 
                        <CheckboxLabel>React</CheckboxLabel>
                        <Checkbox type='checkbox' value="Vue"/> 
                        <CheckboxLabel>Vue</CheckboxLabel>
                        <Checkbox type='checkbox' value="Angular"/> 
                        <CheckboxLabel>Angular</CheckboxLabel>
                    </CheckboxContainer>
                </CheckboxContainer>
                <CheckboxContainer direction="column">
                    <InputLabel>Backend</InputLabel><br/>
                    <CheckboxContainer>
                        <Checkbox type='checkbox' value="Node"/> 
                        <CheckboxLabel>Node</CheckboxLabel>
                        <Checkbox type='checkbox' value="PHP"/> 
                        <CheckboxLabel>PHP</CheckboxLabel>
                        <Checkbox type='checkbox' value="Django"/> 
                        <CheckboxLabel>Django</CheckboxLabel>
                        <Checkbox type='checkbox' value="Rails"/> 
                        <CheckboxLabel>Rails</CheckboxLabel>
                    </CheckboxContainer>
                </CheckboxContainer>
                <CheckboxContainer direction="column">
                    <InputLabel>Data Science</InputLabel><br/>
                    <CheckboxContainer>
                        <Checkbox type='checkbox' value="Python"/> 
                        <CheckboxLabel>Python</CheckboxLabel>
                        <Checkbox type='checkbox' value="R"/> 
                        <CheckboxLabel>R</CheckboxLabel>
                        <Checkbox type='checkbox' value="Scala"/> 
                        <CheckboxLabel>Scala</CheckboxLabel>
                    </CheckboxContainer>
                </CheckboxContainer>
            </InputContainer>
            <InputContainer>
                <InputLabel >Metodología de Trabajo</InputLabel>
                <Input as="textarea" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Experiencia Profesional</InputLabel>
                <Input as="textarea" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Formación Académica</InputLabel>
                <Input as="textarea" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Bio</InputLabel>
                <Input as="textarea" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Perfil de Github o Gitlab</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Portafolio</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Perfil de LinkedIn</InputLabel>
                <Input type="text" />
            </InputContainer>
            <InputContainer>
                <InputLabel >Cobro por Hora</InputLabel>
                <Input type="number" />
            </InputContainer>
            <FormButton>Actualizar Datos</FormButton>
        </FormContainer>
    )
}

export default FormProfessional;