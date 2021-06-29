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
    margin: 0.5rem;
    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
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

export const MenuSelect = styled.select`
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 4px;
    border: 1px solid black;
    background: lightgrey;
    padding: 0.2rem;
    font-size: var(--font-small);
    font-weight: 800;
    outline: none;
    color: black;
    text-align-last:center;
    display: ${props => props.$show === props.profile ? 'inline' : 'none'};

    &:focus {
        border: 2px solid black;
    }

    @media (min-width: 760px) {
        display: none;
    }

`
export const MenuOption = styled.option`
    border-radius: 1rem;
    text-align: center;
    font-size: var(--font-small);
    font-family: var(--font-primary);
    font-weight: 800;
    text-align-last:center;
    

    &:hover {
        box-shadow: 0 0 10px 100px #FED20F inset;
        transition: all .2s ease-in-out;
    }
`