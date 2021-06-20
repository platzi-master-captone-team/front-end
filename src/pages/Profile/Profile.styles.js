import styled from "styled-components";

import avatar from '../../assets/images/avatar.png';

export const ProfileMain = styled.main`
    max-width: 1366px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 1rem;
    padding: 3rem;
    justify-items: center;
    align-items: center;
    margin: auto;
`

export const User = styled.section`
    display: flex;
    justify-content:center;
    padding: 1rem;
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
`

export const UserName = styled.p`
    font-weight: 700;
    font-size: var(--font-large);
`

export const UserRole = styled.p`
    font-weight: 700;
    font-size: var(--font-medium);
    color: grey;
`

export const Avatar = styled.img`
    padding: 1rem;
`
Avatar.defaultProps = {
    src: avatar
};