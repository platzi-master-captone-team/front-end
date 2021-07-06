import styled from "styled-components";

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


export const Header = styled.header`
    padding: 0.8rem 2rem;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    @media (max-width: 600px) {
        justify-content: space-between;   
        padding: 0.5rem;
      }
`
export const NavBarContainer = styled.div`
    max-width: 1366px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
` 

export const Logo = styled.img`
    width: 50px;
    height: 50px;
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
    @media (max-width: 600px) {
        flex-direction: column;
       }
`
export const NavMenuLink = styled(Link)`
    text-decoration: none;
    font-family: Rubik;
    font-weight: bold;
    padding: 0 0.5rem;
    cursor: pointer;
    color: black;
    display: ${props => props.$show ? 'none' : 'inline'};
    @media (max-width: 600px) {
     display: none;   
    }
`
export const Button = styled(Link)`
    font-family: Karla;
    font-weight: bold;
    color: ${props => props.type === "primary" ? 'black' : 'white'};
    text-decoration: none;
    padding: 0.3rem 0.8rem;
    border-style: none;
    background: ${props => props.type === "primary" ? 'white' : 'var(--color-tertiary)'};
    border-radius: 15px;
    text-decoration: none;
    display: ${props => props.$show ? 'none' : 'inline'};
    margin: 0 0.3rem;
`
export const LoginButton = styled(Link)`
    font-family: Rubik;
    font-weight: bold;
    color: ${props => props.type === "primary" ? 'black' : 'white'};
    text-decoration: none;
    padding: 0 0.8rem;
    border-style: none;
    background: ${props => props.type === "primary" ? 'white' : 'var(--color-tertiary)'};
    border-radius: 15px;
    text-decoration: none;
    display: ${props => props.$show ? 'none' : 'inline'};
    margin: 0 0.3rem;
    @media (max-width: 600px) {
        margin: 0.6rem;
       }
`

export const Avatar = styled.img`
    padding: 0 1rem;
    height: 50px;
    display: ${props => props.$show ? 'none' : 'inline'};
    border-radius: 50%;
`
export const UserMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    
`

export const UserMenuDropdown = styled.ul`
    display: ${props => props.$show ? 'flex' : 'none'};
    flex-direction:column;
    position: absolute;
    top: 50px;
    border: 1px solid black;
    
    text-align: center;
`

export const UserMenuOption = styled.li`
    display: block;
    position: relative;
    background: white;
    padding: 0.2rem;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    color:black;

    &:hover{
        background: var(--color-primary);
        color: white;
    }
`
export const UserMenuLink = styled(Link)`
    display: block;
    position: relative;
    background: white;
    padding: 0.2rem;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    color:black;

    &:hover{
        background: var(--color-primary);
        color: white;
    }
`
