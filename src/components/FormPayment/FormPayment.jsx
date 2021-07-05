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
    ValidationMsg,
    Error
} from './FormPayment.styles';

const FormPayment = () => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const [payMethod, setPayMethod] = useState('card')
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
       
    }, [card]);

    const onSubmit = (data, e) => {
        console.log(data)
        
        let object = {
            card_name: data.card_name,
            card_number: data.card_number,
            exp_month: data.exp_month,
            exp_year: data.exp_year,
            cvv: data.cvv
        }
        console.log(object)


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
                <RadioButton type="radio" value='card' checked={payMethod} onChange={handleChange}></RadioButton>
                <RadioLabel>Tarjeta de Débito o Crédito</RadioLabel>
            </PaymentMethod>
            <InputContainer id="card" $show={payMethod}>
                <InputContainer >
                    <InputLabel>Número de Tarjeta</InputLabel>
                    <CardInput type="text" placeholder="" maxLength="16" size="16" 
                    name="card_number" 
                    {...register("card_number", {
                        required: {
                            value: true ,
                            message: "Ingresa el número de tarjeta",
                        },
                        pattern: {
                            value: /(^(?:4[0-9]{12}(?:[0-9]{3})|5[1-5][0-9]{14}|3[47][0-9]{13})$)/i,
                            message: "Ingresa un número de tarjeta válido"
                        }
                    })}/>
                    {errors.card_number && (<Error>{errors.card_number.message}</Error>)}
                </InputContainer>
                <InputContainer>
                    <InputLabel>Nombre</InputLabel>
                    <CardInput type="text" name="card_name" placeholder=""
                    {...register("card_name", {
                        required: {
                            value: true ,
                            message: "Ingresa el nombre en la tarjeta",
                        },
                    })}/>
                    {errors.card_name && (<Error>{errors.card_name.message}</Error>)}
                </InputContainer>
                <EXPCVVContainer>
                    <InputBlock>
                        <InputLabel>Expiración</InputLabel>
                        <CardExp>
                            <CardExpirationInput type="text" name="exp_month" placeholder="MM  /" 
                            maxLength="2" size="2"
                            {...register("exp_month", {
                                required: {
                                    value: true ,
                                    message: "Ingresa el mes de expiración",
                                },
                                pattern: {
                                    value: /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i,
                                    message: "Ingresa un mes válido"
                                }
                            })}
                            />
                            <span>/</span>
                            <CardExpirationInput type="text" name="exp_year" placeholder="YY" 
                            maxLength="2" size="2"
                            {...register("exp_year", {
                                required: {
                                    value: true ,
                                    message: "Ingresa el año de expiración",
                                },
                                pattern: {
                                    value: /(^2[1-9]|[3-9][0-9]$)/i,
                                    message: "Ingresa un año válido"
                                }
                            })}/>
                        </CardExp>
                        {errors.exp_month && (<Error>{errors.exp_month.message}</Error>)}
                        {errors.exp_year && (<Error>{errors.exp_year.message}</Error>)}
                    </InputBlock>
                    <InputBlock>
                        <InputLabel>CVV</InputLabel>
                            <CardInput type="text" name="cvv" placeholder="3 digits" 
                            maxLength="3" size="3"
                            {...register("cvv", {
                                required: {
                                    value: true ,
                                    message: "Ingresa el CVV",
                                },
                                pattern: {
                                    value: /([0-9]$)/i,
                                    message: "Ingresa un CVV válido"
                                }
                            })}/>
                            {errors.cvv && (<Error>{errors.cvv.message}</Error>)}
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