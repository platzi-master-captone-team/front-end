import { SectionTitle } from "../ProfileSection/ProfileSection.styles";

import FormPersonal from "../FormPersonal/FormPersonal";
import FormPassword from "../FormPassword/FormPassword";

const SectionPersonal = () => {
    return(
        <>
            <SectionTitle>Datos Personales</SectionTitle>
            <FormPersonal />
{/*             <SectionTitle>Cambiar Contraseña</SectionTitle>
            <FormPassword /> */}
        </>
    )
}

export default SectionPersonal;