import { SectionTitle } from "../ProfileSection/ProfileSection.styles";
import { Text, PaypalButton } from "./SectionPayment.styles";
import { LoginContext } from '../../utils/loginStatus';
import { useContext } from "react";
import FormBank from "../FormBank/FormBank";

const SectionPayment = () => {

    const { login } = useContext(LoginContext);

    return(
        <>
            <SectionTitle profile="Client" $show={login.role}>Método de Pago</SectionTitle>
            <SectionTitle profile="Expert" $show={login.role}>Método de Retiro</SectionTitle>
            <Text profile="Client" $show={login.role}>Puedes ligar tu cuenta de Paypal para facilitar el proceso de pago.</Text>
            <Text profile="Expert" $show={login.role}>Puedes ligar tu cuenta de Paypal para facilitar el proceso de retiro.</Text>
            <br/>
            <PaypalButton></PaypalButton>
            <br/>
            <Text profile="Expert" $show={login.role}>O puedes agregar los datos de tu cuenta bancaria.</Text>
            <br/>
            <FormBank profile="Expert" $show={login.role}/>
            
        </>
    )
}

export default SectionPayment;