import styled from "styled-components";

export const ChartPanel = styled.div`
    display: ${props => props.$show === props.profile ? 'flex' : 'none'};
    flex-direction: column;
`