import { SectionTitle } from "../ProfileSection/ProfileSection.styles";
import { Text, PaypalButton } from "./SectionPayment.styles";
import { LoginContext } from '../../utils/loginStatus';
import { useContext } from "react";
import FormBank from "../FormBank/FormBank";

const SectionPayment = () => {

    const { login } = useContext(LoginContext);
    

    return(
        <>
            <SectionTitle profile="Cliente" $show={login.role}>Método de Pago</SectionTitle>
            <SectionTitle profile="Experto" $show={login.role}>Método de Retiro</SectionTitle>
            <Text profile="Cliente" $show={login.role}>Puedes ligar tu cuenta de Paypal para facilitar el proceso de pago.</Text>
            <Text profile="Experto" $show={login.role}>Puedes ligar tu cuenta de Paypal para facilitar el proceso de retiro.</Text>
            <br/>
            <PaypalButton></PaypalButton>
            <br/>
            <Text profile="Experto" $show={login.role}>O puedes agregar los datos de tu cuenta bancaria.</Text>
            <br/>
            <FormBank profile="Experto" $show={login.role}/>
            
        </>
    )
}

export default SectionPayment;