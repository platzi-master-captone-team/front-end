import { 
  PaymentContainer,
  OrderSummary,
  MakePayment,
  Title,
  Description,
  OrderCard,
} from "./Payment.styles";

import{useEffect, useState} from 'react';
import OrderTable from '../../components/OrderTable/OrderTable';
import FormPayment from '../../components/FormPayment/FormPayment';

const Payment = () => {

  const [fee, setFee] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setFee(urlParams.get('fee'))
    setDate(urlParams.get('date'))
    setTime(urlParams.get('time'))
    setName(urlParams.get('name'))
    setId(urlParams.get('id'))
  })

  return (
    <PaymentContainer>
      <MakePayment>
        <Title>${fee}.00 USD</Title>
        <Description>
          Consulta de 1 hora con {name} <br />
          <b>Fecha:</b> {date} <br />
          <b>Hora Inicio:</b> {time}:00
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
        <FormPayment/>
      </MakePayment>
      <OrderSummary>
        <OrderCard>
          <Title>Resumen de Orden</Title>
            <OrderTable fee={fee} />
        </OrderCard>
      </OrderSummary>
      
    </PaymentContainer>
  );
}

export default Payment;