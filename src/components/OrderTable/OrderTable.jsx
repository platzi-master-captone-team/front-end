import { StyledTable, TBody, TH, TR, TD } from './OrderTable.styles';

const OrderTable = (  ) => {
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
                    <TD>$25.00</TD>
                    <TD>$25.00</TD>
                </TR>
                <TR>
                    <TD></TD>
                    <TD></TD>
                    <TD><strong>TOTAL</strong></TD>
                    <TD>$25.00</TD>
                </TR>
            </TBody>
        </StyledTable>
    );
};

export default OrderTable;