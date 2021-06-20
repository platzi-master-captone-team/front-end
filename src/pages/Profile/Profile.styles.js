import styled from "styled-components";

import avatar from '../../assets/images/avatar.png';

export const ProfileMain = styled.main`
    max-width: 1366px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
    padding: 1rem;
    justify-items: center;
    align-items: center;
    margin: auto;
    width: 90%;
`

export const Sidebar = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding: 1rem;
    align-self: start;
`
export const User = styled.section`
    display: flex;
    justify-content:center;
    align-items: center;
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
    height: 120px;
`
Avatar.defaultProps = {
    src: avatar
};