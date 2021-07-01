import styled from "styled-components";
import { TitleBold } from '../../GlobalStyles';

export const Section = styled.section`
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const SectionTitle = styled(TitleBold)`
    padding: 2.5rem;
    display: ${props => props.$show === props.profile ? 'inline' : 'none'};
    text-align: center;
`