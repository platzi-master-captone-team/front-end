import { SectionTitle } from "../ProfileSection/ProfileSection.styles";
import { Text, PaypalButton } from "./SectionPayment.styles";

const SectionPayment = () => {
    return(
        <>
            <SectionTitle>Método de Pago</SectionTitle>
            <Text>Puedes ligar tu cuenta de Paypal para facilitar el proceso de pago.</Text>
            <br/>
            <PaypalButton></PaypalButton>
            
        </>
    )
}

export default SectionPayment;