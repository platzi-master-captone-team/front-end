import styled from "styled-components";

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export const Header = styled.header`
    padding: 0.8rem 2rem;
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const Logo = styled.img`

`
Logo.defaultProps = {
    src: logo
};

export const BrandTitle = styled(Link)`
    font-family: var(--font-secondary);
    font-size: var(--font-large);
    font-weight: bold;
    display: flex;
    justify-items: center;
    align-items: center;
    text-decoration: none;
    color: black;
    padding: 0.5rem;
`
export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    margin-left: auto;

`
export const NavMenuLink = styled(Link)`
    text-decoration: none;
    font-family: Rubik;
    font-weight: bold;
    padding: 0 0.5rem;
    cursor: pointer;
    color: black;
`
export const Button = styled(Link)`
    font-family: Karla;
    font-weight: bold;
    color: white;
    padding: 0.5rem 1rem;
    border-style: none;
    background: var(--color-primary);
    border-radius: 15px;
    text-decoration: none;
`
