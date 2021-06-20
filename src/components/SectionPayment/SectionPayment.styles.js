import styled from "styled-components";

import paypal from '../../assets/images/paypal.png';

export const Text = styled.p`

`

export const PaypalButton = styled.img`
    padding: 1rem;
    height: 80px;
`
PaypalButton.defaultProps = {
    src: paypal
};
