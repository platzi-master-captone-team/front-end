import { 
  PaymentContainer,
  OrderSummary,
  MakePayment,
  Title,
  Description,
  PaymentMethod,
  PaymentButton,
  RadioButton,
  InputLabel,
  OrderCard,
} from "./Payment.styles";

import OrderTable from '../../components/OrderTable/OrderTable';

const Payment = () => {
  return (
    <PaymentContainer>
      <MakePayment>
        <Title>$25.00</Title>
        <Description>
          Consulta de 1 hora con Ana Rojas
        </Description>
        <Title>Descripción de Servicio</Title>
        <Description>
          Sesión de 1 hora con el consultor con conexión
          en la plataforma Consultify por medio de videollamada.
        </Description>
        <Title>Método de Pago</Title>
        <Description>
          Selecciona tu método de Pago
        </Description>
        <PaymentMethod>
          <RadioButton type="radio"></RadioButton>
          <InputLabel>Paypal</InputLabel>
        </PaymentMethod>
        <PaymentMethod>
          <RadioButton type="radio"></RadioButton>
          <InputLabel>Tarjeta de Débito o Crédito</InputLabel>
        </PaymentMethod>
        <PaymentButton>
          Procesar Pago
        </PaymentButton>
      </MakePayment>
      <OrderSummary>
        <OrderCard>
          <Title>Resumen de Orden</Title>
            <OrderTable />
        </OrderCard>
      </OrderSummary>
      
    </PaymentContainer>
  );
}

export default Payment;