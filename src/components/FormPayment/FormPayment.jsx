import { FormContainer, InputContainer, InputLabel} from '../FormPersonal/FormPersonal.styles';
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

import {
    PaymentMethod,
    PaymentButton,
    RadioButton,
    RadioLabel,
    CardExp,
    CardInput,
    CardExpirationInput,
    EXPCVVContainer,
    InputBlock,
    ValidationMsg
} from './FormPayment.styles';

const FormPayment = () => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const [payMethod, setPayMethod] = useState('paypal')
    const [card, setCard] = useState();
    const [errorMessage, setErrorMessage] = useState('')
    const [isValidCC, setIsValidCC] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [isApproved, setIsApproved] = useState(false)
    const inputCard = useRef();

    function handleChange (ev) {
        setPayMethod(ev.target.value);
    }

    const handleCard = () => {
        const cardValue = inputCard.current.value
          .replace(/\D/g, '')
          .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
        inputCard.current.value = !cardValue[2]
          ? cardValue[1]
          : `${cardValue[1]} ${cardValue[2]}${`${
              cardValue[3] ? ` ${cardValue[3]}` : ''
            }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
        const numbers = inputCard.current.value.replace(/(\D)/g, '');
        setCard(numbers);
      };

    useEffect(() => {
        handleCard();
    }, [card]);

    const onSubmit = async (data, e) => {
        console.log(data)
        
            let object = {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                country_id: data.country_id,
                password: data.password,
                role_id: data.role_id
            }

        try {
            setIsProcessing(true)
            setTimeout(()=>{
                setIsProcessing(false)
                setIsApproved(true)
                console.log("Payment processed")
                setTimeout(()=>{
                    history.push("/profile/dashboard")
                },4000)
                
          },2000 )  
        } catch (err) {
          console.error(err.message);
        }
    }


    return(
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <PaymentMethod>
                <RadioButton type="radio" value='paypal' checked={payMethod} onChange={handleChange}></RadioButton>
                <RadioLabel>Paypal</RadioLabel>
            </PaymentMethod>
            <PaymentMethod>
                <RadioButton type="radio" value='card' checked={payMethod} onChange={handleChange}></RadioButton>
                <RadioLabel>Tarjeta de Débito o Crédito</RadioLabel>
            </PaymentMethod>
            <InputContainer id="card" $show={payMethod}>
                <InputContainer >
                    <InputLabel>Número de Tarjeta</InputLabel>
                    <CardInput type="text" placeholder="" maxLength="19" size="19" ref={inputCard} onChange={handleCard}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel>Nombre</InputLabel>
                    <CardInput type="text" name="card_name" placeholder=""/>
                </InputContainer>
                <EXPCVVContainer>
                    <InputBlock>
                        <InputLabel>Expiración</InputLabel>
                        <CardExp>
                            <CardExpirationInput type="text" name="month" placeholder="MM  /" maxLength="2" size="2"/>
                            <span>/</span>
                            <CardExpirationInput type="text" name="year" placeholder="YY" maxLength="2" size="2"/>
                        </CardExp>
                    </InputBlock>
                    <InputBlock>
                        <InputLabel>CVV</InputLabel>
                            <CardInput type="text" name="cvv" placeholder="3 digits" maxLength="4" size="4"/>
                    </InputBlock>
                </EXPCVVContainer>
            </InputContainer>    
            <PaymentButton disabled={isProcessing || isApproved} $show={!isProcessing} approved={isApproved}>
                 {isApproved ? 'Pago Exitoso' : 'Procesar Pago'}
            </PaymentButton>
            <PaymentButton disabled={isProcessing || isApproved} $show={isProcessing}> Procesando Pago... </PaymentButton>
            <ValidationMsg $show={isApproved} valid={isApproved}>Cita Confirmada. Serás redirigido a tu dashboard.</ValidationMsg>
        </FormContainer>
    )
}

export default FormPayment;