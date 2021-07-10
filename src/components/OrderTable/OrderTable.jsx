import { StyledTable, TBody, TH, TR, TD } from './OrderTable.styles';

const OrderTable = ( {fee} ) => {
    return (
        <StyledTable>
            <TBody>
                <TR>
                    <TH>Servicio</TH>
                    <TH>Cantidad</TH>
                    <TH>Precio</TH>
                    <TH>Total</TH>
                </TR>
                <TR>
                    <TD>Consultoría</TD>
                    <TD>1</TD>
                    <TD>${fee}.00 USD</TD>
                    <TD>${fee}.00 USD</TD>
                </TR>
                <TR>
                    <TD></TD>
                    <TD></TD>
                    <TD><strong>TOTAL</strong></TD>
                    <TD>${fee}.00 USD</TD>
                </TR>
            </TBody>
        </StyledTable>
    );
};

export default OrderTable;